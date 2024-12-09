// seeds.js
const User = require("./model/user"); // Import your User model
const bcrypt = require("bcryptjs");

const seedAdminUser = async () => {
  try {
    // Check if the admin user already exists
    const adminExists = await User.findOne({ email: "joiya4636@gmail.com" });
    if (adminExists) {
      console.log("Admin user already exists.");
      return;
    }

    // Hash the password for the admin user
    const hashedPassword = await bcrypt.hash("admin123", 10); // Change the password if needed

    // Create a new admin user
    const adminUser = new User({
      name: "Admin User",
      email: "joiya4636@gmail.com",
      password: hashedPassword,
      role: "admin", // Set the role to admin
      avatar: {
        public_id: "default_public_id", // Replace with an actual cloudinary public_id if needed
        url: "https://default-avatar-url.com", // Replace with actual avatar URL
      },
    });

    // Save the admin user
    await adminUser.save();
    console.log("Admin user created successfully!");
  } catch (error) {
    console.error("Error seeding admin user:", error.message);
  }
};

module.exports = seedAdminUser;
