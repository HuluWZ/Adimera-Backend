import { Response, Request } from "express";
import { showSingle } from "../../utils/db_functions/resturant.db";
import { showUsersbyId } from "../../utils/db_functions/user.db"
import { IncomingMessage, UserDataType } from "../../middleware/authJWT";

export const rateRestaurant = async (req: IncomingMessage, res: Response) => {
    try {
        const { userId } = req.userData as UserDataType;
        const { id } = req.params;
        const { rating, review } = req.body;

        // Find the restaurant document by its ID
        const user = await showUsersbyId(userId);
        const restaurant = await showSingle(id);

        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found",
                success: false
            });
        }

        if (!user) {
            // Handle the case where the business is not found
            return res.status(404).json({
                message: "user not found",
                success: false
            })
        }

        // Find the index of the rating in counts array
        const ratingIndex = restaurant.counts.findIndex((count) => count.rating === parseFloat(rating));

        if (ratingIndex !== -1) {
            // Increment the count for the specific rating
            restaurant.counts[ratingIndex].count++;
        } else {
            return res.status(404).json({ message: "Rating not found", success: false });
        }

        // Increment the totalCount

        // Add the new rating to the "featured" array
        restaurant.featured.push({
            rating: parseFloat(rating),
            author: userId,
            review: review,
        });

        // Update the average rating
        let sum = 0;
        let totalRatings = 0;

        for (const count of restaurant.counts) {
            const rating = parseFloat(count.rating);
            const countValue = count.count;

            if (!isNaN(rating) && !isNaN(countValue) && countValue > 0) {
                sum += rating * countValue;
                totalRatings += countValue;
            }
        }

        // Calculate and set the average rating
        if (totalRatings > 0) {
            restaurant.average = (sum / totalRatings).toFixed(1); // Round to one decimal place
        } else {
            restaurant.average = "0"; // Set to "0" if there are no valid ratings
        }

        // Save the updated restaurant document
        await restaurant.save();

        // Return a success response
        return res.status(201).json({
            message: "Rating updated successfully",
            success: true
        });
    } catch (error) {
        console.log(error)
        // Handle any errors that may occur during the process
        return res.status(412).json({ message: error, success: false });
    }
};
