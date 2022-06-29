import React from 'react'

const JobBoardComponent = ({ job, handleTagClicked }) => {
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }

  if (job.tools) {
    tags.push(...job.tools);
  }
  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${
        job.featured && "border-l-4 border-green-500 border-solid"
      } sm:flex-row`}
    >
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0"
          src={job.logo}
          alt={job.company}
        />
      </div>

      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-base text-green-500">
          {job.company}
          {job.isNew && (
            <span className="text-white bg-green-500 font-bold m-2 py-1 px-2 rounded-full uppercase text-sm">
              New
            </span>
          )}
          {job.featured && (
            <span className="text-white bg-gray-800 font-bold py-1 px-2 rounded-full uppercase text-sm">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl">{job.position}</h2>
        <p className="text-gray-500">
          {job.postedAt} · {job.contract} · {job.location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClicked(tag)}
                className="cursor-pointer text-green-500 bg-green-50 font-bold mr-4  mb-4 p-2 rounded"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent
