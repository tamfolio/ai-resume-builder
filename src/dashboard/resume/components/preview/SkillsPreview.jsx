import PropTypes from "prop-types";

function SkillsPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      <div className="grid grid-cols-2 gap-3 my-4">
        {resumeInfo?.Skills?.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <h2 className="text-xs">{skill.name}</h2>
            <div className="h-2 bg-gray-200 w-[120px]">
              <div
                className="h-2 skill-rating-bar"
                style={{
                  backgroundColor: resumeInfo?.themeColor,
                  width: skill?.rating * 20 + "%", // Dynamically set width
                  display: "inline-block", // Ensure block display for the rating bar
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

SkillsPreview.propTypes = {
  resumeInfo: PropTypes.shape({
    themeColor: PropTypes.string,
    Skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default SkillsPreview;
