// const axios = require('axios');
// const { classifyUploadImage } = require('../server/server'); // Adjust the path accordingly
// jest.mock('axios');

// describe('/classifyuploadimage route', () => {
//   it('should classify an image correctly', async () => {
//     // Mocked data
//     const mockReq = {
//       file: {
//         buffer: Buffer.from('mock_image_data'), // Replace with actual image data
//       },
//     };
//     const mockRes = {
//       json: jest.fn(),
//       status: jest.fn(),
//     };
//     const mockClassificationResult = 'mock_classification_result';

//     // Mock axios.post to resolve with classification result
//     axios.post.mockResolvedValueOnce({ data: mockClassificationResult });

//     // Call the classifyUploadImage function
//     await classifyUploadImage(mockReq, mockRes);

//     // Assertions
//     expect(axios.post).toHaveBeenCalledWith(
//       expect.any(String),
//       expect.any(Buffer),
//       expect.objectContaining({
//         headers: {
//           'Prediction-Key': expect.any(String),
//           'Content-Type': 'application/octet-stream',
//         },
//       })
//     );
//     expect(mockRes.json).toHaveBeenCalledWith(mockClassificationResult);
//   });

//   it('should handle errors', async () => {
//     // Mocked data
//     const mockReq = {
//       file: {
//         buffer: Buffer.from('mock_image_data'),
//       },
//     };
//     const mockRes = {
//       json: jest.fn(),
//       status: jest.fn(),
//     };

//     // Mock axios.post to reject with an error
//     const mockError = new Error('Mock error');
//     axios.post.mockRejectedValueOnce(mockError);

//     // Call the classifyUploadImage function
//     await classifyUploadImage(mockReq, mockRes);

//     // Assertions
//     expect(axios.post).toHaveBeenCalledWith(
//       expect.any(String),
//       expect.any(Buffer),
//       expect.objectContaining({
//         headers: {
//           'Prediction-Key': expect.any(String),
//           'Content-Type': 'application/octet-stream',
//         },
//       })
//     );
//     expect(mockRes.status).toHaveBeenCalledWith(500);
//     expect(mockRes.json).toHaveBeenCalledWith({ error: 'An error occurred' });
//   });
// });
