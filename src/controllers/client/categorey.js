import { categorey_List } from "../../model/matchcategorey.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { videoUploadSchema } from "../../model/videoupload.js";
const addcategorey= asyncHandler(async (req, res) => {
    const { categorey } = req.body; // Assuming category is sent in the request body
    try {
        const newCategory = await categorey_List.create({ categorey });
        res.status(201).json({
            status: 'success',
            data: newCategory,
            message: 'Category uploaded successfully',
            timestamp: new Date()
        }); 
    } catch (error) {
        console.error('Error while uploading category:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            timestamp: new Date()
        }); 
    }
});

// Route for fetching categories
const matchcatergorey= asyncHandler(async (req, res) => {
    try {
        const { categorey } = req.body; // Assuming category is sent in the request body

        // Construct a query object based on the provided parameters
        const query = {};
        if (categorey) {
            query.categorey = categorey;
        }

        // Fetch categories based on the constructed query
        const categories = await categorey_List.find(query);

        res.status(200).json({
            status: 'success',
            data: categories,
            message: 'Categories Match successfully',
            timestamp: new Date()
        });
    } catch (error) {
        console.error('Error while fetching categories:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            timestamp: new Date()
        });
    }
});
//Fetch The List Of Categories
const catergoreylist= asyncHandler( async (req, res) => {
    try {
      // Query MongoDB to find all categories
      const categories = await categorey_List.find();
      res.json(categories); // Send the categories as JSON response
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
 //to delete the categories
 const deletecatergorey = asyncHandler(async (req, res) => {
    try {
      const { categoryName } = req.body; // Assuming you receive the category name from the request body
      console.log("================================", categoryName);
  
      // Delete the category
      await categorey_List.findOneAndDelete({ categorey: categoryName });
  
      // Delete all videos associated with the category name
      await videoUploadSchema.deleteMany({ videoCategorey: categoryName });
  
      res.status(200).json({ message: "Category and associated videos deleted successfully." });
    } catch (err) {
      console.error("Error deleting category and associated videos:", err);
      res.status(500).json({ error: "An error occurred while deleting category and associated videos." });
    }
  });
export {matchcatergorey,addcategorey,catergoreylist,deletecatergorey}   
