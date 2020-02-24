const userSchema = new Schema(
  {
    id: Integer,
    firstName: String,
    lastName: String,
    career: String
  },
  {
    timestamps: true
  }
);

const userModel = mongoose.model("User", userSchema);
