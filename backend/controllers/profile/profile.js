import userModel from "../../models/auth/auth.js"

export const getProfile = async (req, res) => {
    try {
        const userId = req.user.id
        const user = await userModel.findOne({_id: userId});
        
        res.status(200).json({
            message: "Profile found",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                avatar: user.avatar,
                provider: user.provider,
                language: user.language,
                timezone: user.timezone
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal server error",
            data: null,
            status: false
        })
    }
} 


export const updateProfile = async (req, res) => {
    try {
        const userId = req.user.id
        const {name, phoneNumber, language, timezone} = req.body
        
        const user = await userModel.findByIdAndUpdate({_id:userId, isDeleted: false}, {
            name,
            phoneNumber,
            language,
            timezone,
        });

        if(!user){
            return res.status(400).json({
                message: "User data not found",
                data: null,
                status: false
            })
        }

        res.status(200).json({
            message: "Profile updated",
            data: user,
            status: true
        })
        
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal server error",
            data: null,
            status: false
        })
    }
}