"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateRestaurant = void 0;
const resturant_db_1 = require("../../utils/db_functions/resturant.db");
const user_db_1 = require("../../utils/db_functions/user.db");
const rateRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.userData;
        const { id } = req.params;
        const { rating, review } = req.body;
        // Find the restaurant document by its ID
        const user = yield (0, user_db_1.showUsersbyId)(userId);
        const restaurant = yield (0, resturant_db_1.showSingle)(id);
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
            });
        }
        // Find the index of the rating in counts array
        const ratingIndex = restaurant.counts.findIndex((count) => count.rating === parseFloat(rating));
        if (ratingIndex !== -1) {
            // Increment the count for the specific rating
            restaurant.counts[ratingIndex].count++;
        }
        else {
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
        }
        else {
            restaurant.average = "0"; // Set to "0" if there are no valid ratings
        }
        // Save the updated restaurant document
        yield restaurant.save();
        // Return a success response
        return res.status(201).json({
            message: "Rating updated successfully",
            success: true
        });
    }
    catch (error) {
        console.log(error);
        // Handle any errors that may occur during the process
        return res.status(412).json({ message: error, success: false });
    }
});
exports.rateRestaurant = rateRestaurant;
//# sourceMappingURL=rate.resturant.controller.js.map