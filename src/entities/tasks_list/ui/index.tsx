'use client';

export default function Tasks() {

    return (
        <>
            {tasks.map((task) => (
                <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    key={task.id}
                >
                    {task}
                </div>
            ))}
        </>
    );
}