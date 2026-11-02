const getDoctorById = async (req, res) => {
    const id= req.params.id;
    try {
        const doctor = await Doctor.findByIdAndDelete(id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }
        res.status(200).json({ success: true, message: "Doctor deleted successfully", doctor });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {getDoctors, getDoctorById, addDoctor, updateDoctor, deleteDoctor};

