import PropTypes from 'prop-types';

function SummeryPreview({ resumeInfo }) {
  return (
    <p className="text-xs">{resumeInfo?.summery}</p>
  );
}

SummeryPreview.propTypes = {
  resumeInfo: PropTypes.shape({
    summery: PropTypes.string,
  }).isRequired,
};

export default SummeryPreview;
