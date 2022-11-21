import React from "react";

const Clock = () => {
    return (
        <div>
            <h3>
                当前时间:{new Date().toString()}.
            </h3>
        </div>
    )
}

export default Clock;