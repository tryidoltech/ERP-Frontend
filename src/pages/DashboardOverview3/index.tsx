import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import ReportBarChart6 from "@/components/ReportBarChart6";
import ReportRadarChart from "@/components/ReportRadarChart";
import { FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import Button from "@/components/Base/Button";
import Litepicker from "@/components/Base/Litepicker";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();
  const salesPerformance = () => {
    return [
      "bg-opacity-50",
      "bg-opacity-40",
      "bg-opacity-30",
      "bg-opacity-20",
      "bg-opacity-10",
    ][_.random(0, 4)];
  };

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12 xl:col-span-8">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium group-[.mode--light]:text-white">
              General Report
            </div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="flex flex-col lg:items-center lg:flex-row gap-y-5">
              <div className="flex flex-col sm:items-center sm:flex-row gap-x-3 gap-y-2">
                <div className="relative">
                  <Lucide
                    icon="CalendarCheck2"
                    className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
                  />
                  <FormSelect className="sm:w-44 pl-9">
                    <option value="custom-date">Custom Date</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </FormSelect>
                </div>
                <div className="relative">
                  <Lucide
                    icon="Calendar"
                    className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
                  />
                  <Litepicker
                    value={generalReportFilter}
                    onChange={(e) => {
                      setGeneralReportFilter(e.target.value);
                    }}
                    options={{
                      autoApply: false,
                      singleMode: false,
                      numberOfColumns: 2,
                      numberOfMonths: 2,
                      showWeekNumbers: true,
                      dropdowns: {
                        minYear: 1990,
                        maxYear: null,
                        months: true,
                        years: true,
                      },
                    }}
                    className="pl-9 sm:w-64 rounded-[0.3rem]"
                  />
                </div>
              </div>
              <div className="flex items-center lg:ml-auto gap-3.5">
                <a href="" className="flex items-center text-slate-500">
                  <Lucide icon="Printer" className="w-3.5 h-3.5 stroke-[1.7]" />
                  <div className="ml-1.5 whitespace-nowrap underline decoration-dotted decoration-slate-300 underline-offset-[3px]">
                    Export to PDF
                  </div>
                </a>
                <a href="" className="flex items-center text-primary">
                  <Lucide
                    icon="ExternalLink"
                    className="w-3.5 h-3.5 stroke-[1.7]"
                  />
                  <div className="ml-1.5 whitespace-nowrap underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
                    Show full report
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-5">
              <ReportBarChart6 height={280} />
            </div>
            <div className="flex flex-wrap items-center justify-center mt-5 gap-y-3 gap-x-5">
              <div className="flex items-center text-slate-500">
                <div className="w-2 h-2 mr-2 border rounded-full border-primary/60 bg-primary/60"></div>{" "}
                Patient Admissions Over Time
              </div>
              <div className="flex items-center text-slate-500">
                <div className="w-2 h-2 mr-2 border rounded-full border-slate-500/60 bg-slate-500/60"></div>{" "}
                Bed Occupancy Rate Over Time
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-4">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium xl:group-[.mode--light]:text-white">
              Patient Overview
            </div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="flex flex-col gap-3 sm:items-center sm:flex-row">
              <div>
                <div className="text-xl font-medium">24,782</div>
                <div className="mt-1 text-base text-slate-500">
                  Total Patients
                </div>
              </div>
              <div className="relative sm:ml-auto">
                <Lucide
                  icon="CalendarCheck2"
                  className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
                />
                <FormSelect className="sm:w-32 pl-9">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </FormSelect>
              </div>
            </div>
            <div className="mt-6 mb-9">
              <div className="pt-6 border-t border-dashed border-slate-300/70">
                <div className="text-slate-500">
                  Medical condition distribution
                </div>
                <div className="flex h-2.5 mt-3">
                  <Tippy
                    as="div"
                    content="Heart Disease"
                    className="h-full first:rounded-l last:rounded-r border border-primary/50 bg-primary/50 w-[35%]"
                  ></Tippy>
                  <Tippy
                    as="div"
                    content="Diabetes"
                    className="h-full first:rounded-l last:rounded-r border border-info/50 bg-info/50 w-[20%]"
                  ></Tippy>
                  <Tippy
                    as="div"
                    content="Respiratory Issues"
                    className="h-full first:rounded-l last:rounded-r border border-pending/50 bg-pending/50 w-[5%]"
                  ></Tippy>
                  <Tippy
                    as="div"
                    content="Other"
                    className="h-full first:rounded-l last:rounded-r border border-success/50 bg-success/50 w-[40%]"
                  ></Tippy>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <div>
                  <div className="flex flex-col items-end">
                    <div className="text-right truncate w-28 text-slate-500">
                      Heart Disease
                    </div>
                    <div className="flex items-center mt-1.5">
                      <div className="text-base font-medium">2,974</div>
                      <div className="flex items-center ml-2 -mr-1 text-xs text-success">
                        11%
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-6">
                    <div className="text-right truncate w-28 text-slate-500">
                      Diabetes
                    </div>
                    <div className="flex items-center mt-1.5">
                      <div className="text-base font-medium">1,696</div>
                      <div className="flex items-center ml-2 -mr-1 text-xs text-success">
                        2%
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-px mx-12 border-r border-dashed"></div>
                <div>
                  <div className="flex flex-col">
                    <div className="truncate w-28 text-slate-500">
                      Respiratory Issues
                    </div>
                    <div className="flex items-center mt-1.5">
                      <div className="text-base font-medium">2,556</div>
                      <div className="flex items-center ml-2 -mr-1 text-xs text-success">
                        11%
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-6">
                    <div className="truncate w-28 text-slate-500">Other</div>
                    <div className="flex items-center mt-1.5">
                      <div className="text-base font-medium">1,278</div>
                      <div className="flex items-center ml-2 -mr-1 text-xs text-success">
                        2%
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button className="w-full border-dashed border-slate-300 hover:bg-slate-50">
              <Lucide
                icon="ExternalLink"
                className="stroke-[1.3] w-4 h-4 mr-2"
              />{" "}
              See Full Report
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 md:col-span-6 xl:col-span-4 gap-y-10">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">Patient Admissions</div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="overflow-x-auto overflow-y-hidden">
              <div className="min-w-[420px] xl:min-w-0">
                <div className="flex gap-3.5">
                  <div className="w-full -mr-[13%]">
                    <div className="h-5 text-xs text-slate-400"></div>
                    <div className="grid grid-cols-4 mt-2 gap-[0.4rem] text-slate-500">
                      <div>
                        <div className="rounded-[0.17rem] w-full pt-[100%] mb-[0.4rem]"></div>
                        <div className="rounded-[0.17rem] w-full pt-[100%] mb-[0.4rem] relative">
                          <div className="absolute inset-y-0 my-auto text-xs -mt-0.5 text-slate-400">
                            Mon
                          </div>
                        </div>
                        <div className="rounded-[0.17rem] w-full pt-[100%] mb-[0.4rem]"></div>
                        <div className="rounded-[0.17rem] w-full pt-[100%] mb-[0.4rem] relative">
                          <div className="absolute inset-y-0 my-auto text-xs -mt-0.5 text-slate-400">
                            Tue
                          </div>
                        </div>
                        <div className="rounded-[0.17rem] w-full pt-[100%] mb-[0.4rem]"></div>
                        <div className="rounded-[0.17rem] w-full pt-[100%] mb-[0.4rem] relative">
                          <div className="absolute inset-y-0 my-auto text-xs -mt-0.5 text-slate-400">
                            Wed
                          </div>
                        </div>
                        <div className="rounded-[0.17rem] w-full pt-[100%] mb-[0.4rem]"></div>
                      </div>
                    </div>
                  </div>
                  {["Sep", "Oct", "Nov", "Dec"].map((month) => (
                    <div key={month} className="w-full">
                      <div className="h-5 text-xs text-slate-500">{month}</div>
                      <div className="grid grid-cols-4 mt-2 gap-y-[0.4rem] gap-x-[0.4rem]">
                        {[1, 2, 3, 4].map((week) => (
                          <div key={week}>
                            {[
                              "Mon",
                              "Tue",
                              "Wed",
                              "Thu",
                              "Fri",
                              "Sat",
                              "Sun",
                            ].map((day) => (
                              <Tippy
                                as="div"
                                key={day}
                                content={`${_.random(
                                  1,
                                  50
                                )} sales on 2 Sep, 2021`}
                                className={clsx({
                                  "rounded w-full pt-[84%] mb-[0.4rem] cursor-pointer zoom-in bg-primary border border-primary/20":
                                    true,
                                  [salesPerformance()]: true,
                                })}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center w-full mt-2 xl:justify-end">
                  <div className="mr-2.5 text-xs text-slate-500">Less</div>
                  <Tippy
                    as="div"
                    content="1 - 5 sales"
                    className="rounded-[0.17rem] mr-1 w-3 h-3 -mt-0.5 bg-primary/10"
                  />
                  <Tippy
                    as="div"
                    content="5 - 15 sales"
                    className="rounded-[0.17rem] mr-1 w-3 h-3 -mt-0.5 bg-primary/20"
                  />
                  <Tippy
                    as="div"
                    content="15 - 35 sales"
                    className="rounded-[0.17rem] mr-1 w-3 h-3 -mt-0.5 bg-primary/30"
                  />
                  <Tippy
                    as="div"
                    content="35 - 65 sales"
                    className="rounded-[0.17rem] mr-1 w-3 h-3 -mt-0.5 bg-primary/40"
                  />
                  <Tippy
                    as="div"
                    content="65+ sales"
                    className="rounded-[0.17rem] mr-1 w-3 h-3 -mt-0.5 bg-primary/60"
                  />
                  <div className="ml-1.5 text-xs text-slate-500">More</div>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 border-dashed border-slate-300 hover:bg-slate-50">
              <Lucide
                icon="ExternalLink"
                className="stroke-[1.3] w-4 h-4 mr-2"
              />{" "}
              See Full Report
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 md:col-span-6 xl:col-span-4 gap-y-10">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">Bed Occupancy Overview</div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <Menu className="absolute top-0 right-0 mt-5 mr-5">
              <Menu.Button className="w-5 h-5 text-slate-500">
                <Lucide
                  icon="MoreVertical"
                  className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                  Delete
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <div className="pb-5 border-b border-dashed mb-7 border-slate-300/70">
              <div className="text-base text-slate-500">Total Beds</div>
              <div className="flex items-center mt-1">
                <div className="text-xl font-medium">476,221</div>
                <div className="flex items-center ml-2 -mr-1 text-xs text-success">
                  11%
                  <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
                </div>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <div className="flex-1">
                <div className="truncate flex text-slate-500 items-center h-3.5 pl-2 font-medium border-l-4 border-success/40">
                  Occupied Beds
                </div>
                <div className="mt-3 mb-2 text-lg font-medium">40%</div>
                <div className="text-slate-500">190,488 Beds</div>
              </div>
              <div className="flex justify-center flex-1">
                <div className="flex items-center justify-center w-10 h-10 mx-auto font-medium rounded-full box">
                  vs
                </div>
              </div>
              <div className="flex-1 text-right">
                <div className="truncate flex text-slate-500 items-center justify-end h-3.5 pr-2 font-medium border-r-4 border-danger/40">
                  Available Beds
                </div>
                <div className="mt-3 mb-2 text-lg font-medium">60%</div>
                <div className="text-slate-500">285,733 Beds</div>
              </div>
            </div>
            <div className="flex h-2.5 mt-2">
              <Tippy
                as="div"
                content="Occupied Beds"
                className="h-full first:rounded-l last:rounded-r border border-primary/50 bg-primary/50 w-[60%]"
              ></Tippy>
              <Tippy
                as="div"
                content="Available Beds"
                className="h-full first:rounded-l last:rounded-r border border-info/50 bg-info/50 w-[40%]"
              ></Tippy>
            </div>
            <div className="mt-2.5 text-slate-500 text-center">
              +42 Bed Allocation
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 md:col-span-6 xl:col-span-4 gap-y-10">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">Department Performance</div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <ReportRadarChart className="relative z-10" height={216} />
            <div className="flex flex-wrap items-center justify-center mt-5 gap-y-3 gap-x-5">
              <div className="flex items-center text-slate-500">
                <div className="w-2 h-2 mr-2 border rounded-full border-primary/60 bg-primary/60"></div>{" "}
                Cardiovascular Unit
              </div>
              <div className="flex items-center text-slate-500">
                <div className="w-2 h-2 mr-2 border rounded-full border-info/60 bg-info/60"></div>{" "}
                Radiology Department
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
