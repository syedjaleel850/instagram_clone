import React, { useState } from "react";

function More() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="position-relative">
      {/* More Button */}
      <div className="hover-bg" onClick={toggleMenu}>
        <i className="bi bi-list"></i> More
      </div>

      {/* Menu */}
      {showMenu && (
        <div
          className="bg-white text-dark p-3 rounded-3 mt-2 shadow-sm position-absolute"
          style={{ width: "300px", zIndex: 1000 }}
        >
          <ul className="list-unstyled m-0">
            <li className="d-flex align-items-center py-2 border-bottom">
              <i className="bi bi-gear me-3"></i> Settings
            </li>
            <li className="d-flex align-items-center py-2 border-bottom">
              <i className="bi bi-graph-up me-3"></i> Your activity
            </li>
            <li className="d-flex align-items-center py-2 border-bottom">
              <i className="bi bi-bookmark me-3"></i> Saved
            </li>
            <li className="d-flex align-items-center py-2 border-bottom">
              <i className="bi bi-moon me-3"></i> Switch appearance
            </li>
            <li className="d-flex align-items-center py-2 border-bottom">
              <i className="bi bi-exclamation-circle me-3"></i> Report a problem
            </li>
            <li className="d-flex align-items-center py-2 border-bottom">
              <i className="bi bi-threads-fill me-3"></i> Threads
            </li>
            <li className="d-flex align-items-center py-2 border-bottom">
              <i className="bi bi-person-switch me-3"></i> Switch accounts
            </li>
            <li className="d-flex align-items-center py-2">
              <i className="bi bi-box-arrow-right me-3"></i> Log out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default More;