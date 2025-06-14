import React from "react";

//create your first component
const Jumbotron = () => {
    return (
        <div className="container my-4">
            <div className="jumbotron p-3 mb-5 px-4" style={{ border: '1px solid #ddd', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                <h1 className="display-4 text-center ">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, qui cupiditate quos quaerat fugiat cumque soluta laborum dicta tempore corrupti aut. A asperiores modi ratione voluptas, consectetur dolore quaerat qui?</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
        </div>
    );
};

export default Jumbotron;