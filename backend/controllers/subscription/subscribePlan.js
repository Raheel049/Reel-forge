export const subscribePlan = (req, res) => {
    try {
        const {id} = req.params

        
    } catch (error) {
        return res.status(500).json({
            message : error.message || "Internal server error",
            status: false,
            data: null
        })
    }

}