const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
  },
  {
    timestamps: true
  }
);

const userModel = mongoose.model("User", userSchema);
