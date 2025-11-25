import { asyncHandler } from "../utils/asyncHandler.js";

const healthcheck = asyncHandler(async (req, res) => {
  return res
    .status(201)
    .json(new ApiResponse(200, "OK", "Health Check passed!"));
});

export { healthcheck };
