import React from "react";
import CustomAlert, { showCustomAlert, closeCustomAlert } from "./components/CustomAlert";

const App: React.FC = () => {
    const handleClick = () => {
        showCustomAlert("Hey", "You clicked me 🙂");
    };

    return (
        <main>
            <button className="my_btn" onClick={handleClick}>
                Click Me 🙂
            </button>
            <CustomAlert onClose={closeCustomAlert} />
        </main>
    );
};

export default App;
