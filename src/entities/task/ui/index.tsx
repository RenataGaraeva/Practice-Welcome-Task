'use client';

interface TaskProps {
    task: Tasks;
}

export default function Task({ task }: TaskProps) {

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center">
                        <input
                className="btn btn-outline-primary me-2"
                type="button"
                value="Delete"
            />
            <span>
          Created {task.creationDate}
          </span>
        </div>
    );
}