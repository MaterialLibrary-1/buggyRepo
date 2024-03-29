import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema(
  {
    userId: { type: String },
    profession: { type: Number, default: "" },
    workingAs: { type: String, default: "" },
    workingScince: { type: String, default: "" },
    companyName: { type: String, default: "" },
    companyType: { type: String, default: "" },
    companyDesc: { type: String, default: "" },
    companyStructure: { type: String, default: "" },
    websiteLink: { type: String, default: "" },
    estOn: { type: Date, default: "" },
    companyEmail: { type: String, default: "" },
    address: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    country: { type: String, default: "" },
    pincode: { type: Number, default: "" },
    pan: { type: String, default: "" },
    dp: { type: String, default: "" },
    resumes: { type: Array, default: "" },
    linkedIn: { type: String, default: "" },
    status: { type: Number, default: 0 },
    createdBy: { type: String, default: "" },
    updatedBy: { type: String, default: "" },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
professionalSchema.method({
  saveData: async function () {
    return this.save();
  },
});
professionalSchema.static({
  findData: function (findObj) {
    return this.find(findObj);
  },
  findOneData: function (findObj) {
    return this.findOne(findObj);
  },
  findOneAndUpdateDataa: function (findObj, updateObj) {
    return this.findOneAndUpdate(findObj, updateObj, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
  },
  findOneDataAndDelete: function (findObj) {
    return this.findOneAndDelete(findObj);
  },

  findAndUpdate: function (findObj, updateObj) {
    return this.update(findObj, updateObj);
  },

  findDataWithAggregate: function (findObj) {
    return this.aggregate(findObj);
  },
});
module.exports = mongoose.model("professionals", professionalSchema);
