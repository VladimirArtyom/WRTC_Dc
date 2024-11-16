import mongoose, { Schema } from "mongoose";

const InvitationSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

export default mongoose.model("Invitation", InvitationSchema);