import React from "react";

// Define props for the CustomAlert component
interface CustomAlertProps {
    onClose: () => void;
}

// CustomAlert Component
const CustomAlert: React.FC<CustomAlertProps> = ({ onClose }) => {
    return (
        <div id="customAlertBox" className="custom_alert">
            <div className="custom_alert_content">
                <h2 id="myAlertTitle" className="custom_alert_h2"></h2>
                <p id="myAlertText" className="custom_alert_p"></p>
                <button className="custom_alert_button" onClick={onClose}>
                    Okay
                </button>
            </div>
        </div>
    );
};

// Function to show the alert
export const showCustomAlert = (title: string, message: string): void => {
    const alertBox = document.getElementById("customAlertBox");
    if (alertBox) {
        alertBox.querySelector("#myAlertTitle")!.textContent = title;
        alertBox.querySelector("#myAlertText")!.textContent = message;
        alertBox.classList.add("visible"); // Show the alert
    }
};

// Function to close the alert
export const closeCustomAlert = (): void => {
    const alertBox = document.getElementById("customAlertBox");
    if (alertBox) {
        alertBox.classList.remove("visible"); // Hide the alert
    }
};

export default CustomAlert;
