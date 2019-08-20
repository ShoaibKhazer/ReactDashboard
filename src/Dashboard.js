import React from "react";

import TableHeader from "./components/TableHeader";
import TopNavigationTabs from "./components/TopNavigationTabs";
import Barchart from "./components/BarChart";
import CircularAnalyticsBar from './components/CircularAnalyticsBar';
import Table from './components/Table';

export default function Dashboard() {

  return (
    <div>
      <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
          <div className="pcoded-content">
            <div className="pcoded-inner-content">
              <div class="page-header">
                <div class="page-block">
                  <div class="row align-items-center">
                    <div class="col-md-8">
                      <div class="page-header-title">
                        <h4 class="m-b-10">Machine Learning Engineer</h4>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div
                        class="page-header-title"
                        style={{ display: "flex" }}
                      >
                        <h6 class="m-b-10">Email limit: 0 / 200 Active</h6>
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-body">
                <div className="page-wrapper">
                  <div className="row">
                    <TopNavigationTabs />
                    <div className="col-xl-12 col-md-12">
                      <div className="card">
                        <div
                          className="card-header"
                          style={{ display: "flex" }}
                        >
                          <select class="form-select">
                            <option value="" disabled selected>
                              Last week
                            </option>
                          </select>
                          <div class="col-md-4">
                            <div
                              class="page-header-title"
                              style={{ display: "flex" }}
                            >
                              <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round" />
                              </label>
                              <h6 class="m-b-10">All time</h6>
                            </div>
                          </div>
                          <div className="card-header-right">
                            <div className="btn-group card-option">
                              <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                <li className="dropdown-item full-card">
                                  <a href="#!">
                                    <span>
                                      <i className="feather icon-maximize" />{" "}
                                      maximize
                                    </span>
                                    <span style={{ display: "none" }}>
                                      <i className="feather icon-minimize" />
                                      Restore
                                    </span>
                                  </a>
                                </li>
                                <li className="dropdown-item minimize-card">
                                  <a href="javascript:">
                                    <span>
                                      <i className="feather icon-minus" />{" "}
                                      collapse
                                    </span>
                                    <span style={{ display: "none" }}>
                                      <i className="feather icon-plus" /> expand
                                    </span>
                                  </a>
                                </li>
                                <li className="dropdown-item reload-card">
                                  <a href="#!">
                                    <i className="feather icon-refresh-cw" />{" "}
                                    reload
                                  </a>
                                </li>
                                <li className="dropdown-item close-card">
                                  <a href="javascript:">
                                    <i className="feather icon-trash" /> remove
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="card-block custom-grid">
                          <div className="row pb-3">
                            <div className="col-md-2 col-6 text-center m-b-10">
                              <h3 className="f-w-300">68</h3>
                              <span>Total people</span>
                              <h3 className="f-w-300">61</h3>
                              <span>Contacted</span>
                            </div>
                            <CircularAnalyticsBar
                              value={95.6}
                              color="#3863a0"
                              count={65}
                              description={'Delivery rate'}
                            />
                            <CircularAnalyticsBar
                              value={36.1}
                              color="#83d0f2"
                              count={22}
                              description={'Open rate'}
                            />
                            <CircularAnalyticsBar
                              value={3.3}
                              color="#3863a0"
                              count={2}
                              description={'Reply rate'}
                            />
                            <CircularAnalyticsBar
                              value={1.6}
                              color="#3863a0"
                              count={1}
                              description={'Interested'}
                            />
                            <CircularAnalyticsBar
                              value={0}
                              color="#3863a0"
                              count={0}
                              description={'Opt outs rate'}
                            />
                            <CircularAnalyticsBar
                              value={10.3}
                              color="#3863a0"
                              count={7}
                              description={'Not reached'}
                            />
                          </div>
                          <div
                            className="bar-chart3"
                            style={{ height: "270px" }}
                          >
                            <Barchart />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12 col-md-6">
                      <div className="card code-table">
                        <div className="card-header">
                          <TableHeader />

                          <div className="card-header-right">
                            <div className="btn-group card-option">
                              <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                <li className="dropdown-item full-card">
                                  <a href="#!">
                                    <span>
                                      <i className="feather icon-maximize" />{" "}
                                      maximize
                                    </span>
                                    <span style={{ display: "none" }}>
                                      <i className="feather icon-minimize" />{" "}
                                      Restore
                                    </span>
                                  </a>
                                </li>
                                <li className="dropdown-item minimize-card">
                                  <a href="javascript:">
                                    <span>
                                      <i className="feather icon-minus" />{" "}
                                      collapse
                                    </span>
                                    <span style={{ display: "none" }}>
                                      <i className="feather icon-plus" /> expand
                                    </span>
                                  </a>
                                </li>
                                <li className="dropdown-item reload-card">
                                  <a href="#!">
                                    <i className="feather icon-refresh-cw" />{" "}
                                    reload
                                  </a>
                                </li>
                                <li className="dropdown-item close-card">
                                  <a href="javascript:">
                                    <i className="feather icon-trash" /> remove
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <Table />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
