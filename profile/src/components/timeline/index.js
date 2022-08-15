import React from 'react';
import './timeline.scss';
export default function Timeline() {
  return (
      <ul className="timeline" id="timeline">
          <li className="li complete">
                 <div className="timestamp">
                  <span className="author">Abhi Sharma</span>
                  <span className="date">11/15/2014</span>
                  </div>
                      <div className="status">
                          <h4> Shift Created </h4>
                      </div>
                  </li>
                  <li className="li complete">
                      <div className="timestamp">
                          <span className="author">PAM Admin</span>
                          <span className="date">11/15/2014</span>
                          </div>
                              <div className="status">
                                  <h4> Email Sent </h4>
                              </div>
                          </li>
                          <li className="li complete">
                              <div className="timestamp">
                                  <span className="author">Aaron Rodgers</span>
                                  <span className="date">11/15/2014</span>
                                  </div>
                                      <div className="status">
                                          <h4> SIC Approval </h4>
                                      </div>
                                  </li>
                                  <li className="li">
                                      <div className="timestamp">
                                          <span className="author">PAM Admin</span>
                                          <span className="date">TBD</span>
                                          </div>
                                              <div className="status">
                                                  <h4> Shift Completed </h4>
                                              </div>
                                          </li>
                                      </ul>
                                      );
  }