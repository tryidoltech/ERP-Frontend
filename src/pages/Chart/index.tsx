import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormSwitch } from "@/components/Base/Form";
import VerticalBarChart from "@/components/VerticalBarChart";
import StackedBarChart from "@/components/StackedBarChart";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import LineChart from "@/components/LineChart";
import DonutChart from "@/components/DonutChart";
import PieChart from "@/components/PieChart";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            Chart
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            Unlock the potential of data visualization with our Chart component.
            Create stunning and informative charts effortlessly.
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Vertical Bar Chart
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Vertical Bar Chart" component allows you to
                        visually represent data in a vertical bar chart format.
                        Vertical bar charts are effective for displaying and
                        comparing numerical data across categories or groups.
                        This section demonstrates how to create and customize
                        vertical bar charts using a popular charting library
                        such as Chart.js.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <VerticalBarChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <VerticalBarChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Vertical bar charts are a powerful way to visualize
                        data, making it easier to understand and compare values
                        across different categories or groups. By following the
                        steps above and customizing the chart to fit your
                        specific data and design requirements, you can
                        effectively incorporate vertical bar charts into your
                        web application for data visualization.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Horizontal Bar Chart
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Horizontal Bar Chart" component allows you to
                        visually represent data in a horizontal bar chart
                        format. Horizontal bar charts are effective for
                        displaying and comparing numerical data across
                        categories or groups. This section demonstrates how to
                        create and customize horizontal bar charts using a
                        popular charting library such as Chart.js.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <HorizontalBarChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <HorizontalBarChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Horizontal bar charts provide an effective way to
                        visualize data, making it easier to understand and
                        compare values across different categories or groups. By
                        following the steps above and customizing the chart to
                        fit your specific data and design requirements, you can
                        effectively incorporate horizontal bar charts into your
                        web application for data visualization.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Donut Chart
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Donut Chart" component is a type of circular chart
                        used to display data in a visually appealing way. Donut
                        charts are a variation of pie charts with a hole in the
                        center, making them useful for displaying data
                        distribution and comparisons. This section demonstrates
                        how to create and customize donut charts using a popular
                        charting library such as Chart.js.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <DonutChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <DonutChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Donut Chart" component is a type of circular chart
                        used to display data in a visually appealing way. Donut
                        charts are a variation of pie charts with a hole in the
                        center, making them useful for displaying data
                        distribution and comparisons. This section demonstrates
                        how to create and customize donut charts using a popular
                        charting library such as Chart.js.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Stacked Bar Chart
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Stacked Bar Chart" component is a powerful data
                        visualization tool that allows you to display data in a
                        stacked bar format. Stacked bar charts are effective for
                        visualizing data with multiple categories and comparing
                        the composition of each category across different groups
                        or time periods. This section demonstrates how to create
                        and customize stacked bar charts using a popular
                        charting library such as Chart.js.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <StackedBarChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <StackedBarChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Stacked bar charts are a versatile way to represent data
                        with multiple categories, making it easier to compare
                        and analyze the composition of each category. By
                        following the steps above and customizing the chart to
                        fit your specific data and design requirements, you can
                        effectively incorporate stacked bar charts into your web
                        application for data visualization.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Line Chart
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Line Chart" component is a valuable data
                        visualization tool that allows you to represent data
                        points as a series of connected data markers, forming a
                        line. Line charts are effective for showing trends over
                        time, making comparisons, and visualizing data with
                        continuous variables. This section demonstrates how to
                        create and customize line charts using a popular
                        charting library such as Chart.js.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <LineChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <LineChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Line charts are a powerful tool for visualizing trends
                        and patterns in your data. By following the steps above
                        and customizing the chart to fit your specific data and
                        design requirements, you can effectively incorporate
                        line charts into your web application for data
                        visualization.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Pie Chart
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Pie Chart" component is a popular data
                        visualization tool used to represent data as a circular
                        graph. Each data point is displayed as a slice of the
                        pie, with the size of each slice proportional to the
                        data it represents. Pie charts are effective for
                        displaying data with a few categories and showing the
                        relative proportions of each category within the whole.
                        This section demonstrates how to create and customize
                        pie charts using a popular charting library such as
                        Chart.js.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <PieChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <PieChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Pie charts are a useful tool for visualizing the
                        distribution of data among categories or showing the
                        relative proportions of different parts within a whole.
                        By following the steps above and customizing the chart
                        to fit your specific data and design requirements, you
                        can effectively incorporate pie charts into your web
                        application for data visualization.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                <div className="text-[0.94rem] font-medium">Component API</div>
              </div>
              <div>
                <p className="leading-relaxed">
                  In this section, you will find detailed information about the
                  available props, classes, and options that can be used with
                  the component. Understanding these properties is essential for
                  customizing and configuring the component to suit your
                  specific requirements.
                </p>
                <p className="mt-2 leading-relaxed">
                  Below is a list of props that can be passed to the component:
                </p>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute left-0 px-3 ml-4 -mt-2.5 font-medium bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Chart</div>
                  </div>
                  <div className="px-5 pt-2 pb-5 mt-2.5 flex flex-col gap-3.5 leading-relaxed overflow-x-auto">
                    <Table sm>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th className="w-44 whitespace-nowrap">
                            Prop
                          </Table.Th>
                          <Table.Th className="w-56 whitespace-nowrap">
                            Type
                          </Table.Th>
                          <Table.Th className="whitespace-nowrap">
                            Description
                          </Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        <Table.Tr>
                          <Table.Td>`type`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            The type of chart (e.g., "line", "bar", "pie").
                            Defaults to "line".
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`data`</Table.Td>
                          <Table.Td>`ChartConfiguration['data']`</Table.Td>
                          <Table.Td>
                            The data configuration for the chart.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`options`</Table.Td>
                          <Table.Td>`ChartConfiguration['options']`</Table.Td>
                          <Table.Td>
                            The options configuration for the chart.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`width`</Table.Td>
                          <Table.Td>`number`, `auto`</Table.Td>
                          <Table.Td>
                            The width of the chart canvas in pixels or "auto" to
                            use the parent container's width. Defaults to
                            "auto".
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`height`</Table.Td>
                          <Table.Td>`number`, `auto`</Table.Td>
                          <Table.Td>
                            The height of the chart canvas in pixels or "auto"
                            to use the parent container's height. Defaults to
                            "auto".
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`getRef`</Table.Td>
                          <Table.Td>
                            `(el: ChartElement | null) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            A function that receives a reference to the Chart
                            canvas element.
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-first col-span-12 lg:order-last lg:col-span-3 xl:col-span-2">
            <div className="sticky top-[104px]">
              <ul className="relative flex flex-col py-2.5 rounded-[0.6rem] bg-primary/[0.03] group-[.mode--light]:bg-slate-300/10 border border-primary/10 group-[.mode--light]:border-slate-300/20 text-slate-600/80 dark:group-[.mode--light]:bg-darkmode-500/60 dark:group-[.mode--light]:border-darkmode-200/60">
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400 active",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Vertical Bar Chart
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Horizontal Bar Chart
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Donut Chart
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Stacked Bar Chart
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Line Chart
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Pie Chart
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Component API
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
