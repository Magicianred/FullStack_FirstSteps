// Authentication is the process of determining if the user is who he/she claims to be. It involves validating their email/password.

// Authorization is the process of determining if the user has permission to perform a given operation.

// To hash passwords, use bcrypt:
// Hashing passwords
const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash("1234", salt);

// Validating passwords
const isValid = await bcrypt.compare("1234", hashed);