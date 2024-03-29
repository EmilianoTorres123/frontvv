import { Configuration, OpenAIApi } from "openai";

class Serviceimg {

  async getimg(data) {
    const configuration = new Configuration({
        apiKey: "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",
      });
    const openai = new OpenAIApi(configuration);
    if (!configuration.apiKey) {
        /*
        res.status(500).json({
          error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
          }
        });
        */
        return {
            status:500,
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        };
      }
    
      const imgdescripcion = data.d || '';
      if (imgdescripcion.trim().length === 0) {
        /*
        res.status(400).json({
          error: {
            message: "Please enter a valid animal",
          }
        });
        */
        return {
            status:400,
            error: {
                message: "Please enter a valid animal",
            }
        };
      }

    
      try {
        const response=await openai.createImage({
            prompt: `${data.d}`,
            n: 1,
            size: "1024x1024",
        })
        // res.status(200).json({ result: completion.data.choices[0].text });
        return {
            status: 200,
            result: response.data.data[0].url,
        }
      } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          // res.status(error.response.status).json(error.response.data);
          return {
            status: error.response.data
          }
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
          /*
          res.status(500).json({
            error: {
              message: 'An error occurred during your request.',
            }
          });
          */
         return {
            status: 500,
            error: {
                message: 'An error occurred during your request.',
            }
         }
        }
      }
  }

    
}

const instance = new Serviceimg();
export default instance;