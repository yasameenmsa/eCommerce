export default function ServiceProcess({ service }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Our Process</h2>
      <p className="text-gray-600 mb-6">
        Here's how we'll work together to create your {service.title.toLowerCase()}:
      </p>
      
      <div className="space-y-6">
        {service.process.map((step, index) => (
          <div key={index} className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold">
                {index + 1}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{step}</h3>
              <p className="text-gray-600">
                {getStepDescription(index, service.title)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to generate step descriptions
function getStepDescription(stepIndex, serviceTitle) {
  const descriptions = [
    "We'll discuss your needs, goals, and vision for the project to ensure we understand exactly what you're looking for.",
    "Our team will research your industry, competitors, and target audience to develop concepts that align with your brand.",
    "We'll present initial design concepts for your review and gather your feedback on the direction.",
    "Based on your feedback, we'll refine the chosen concept until it perfectly matches your vision.",
    "Once approved, we'll finalize all deliverables and provide you with all necessary files in the formats you need."
  ];
  
  return descriptions[stepIndex] || "We'll work closely with you during this step to ensure quality results.";
}