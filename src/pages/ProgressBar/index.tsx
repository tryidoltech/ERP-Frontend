import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import Progress from "@/components/Base/Progress";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormSwitch } from "@/components/Base/Form";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            Progress Bar
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            Discover the power of our Progress Bar component for visualizing
            progress and conveying information effectively.
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Basic Progress Bar
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
                        The Basic Progress Bar component allows you to visually
                        represent the progress of a task or process, providing
                        users with real-time feedback on completion status. This
                        section provides an introduction to the Basic Progress
                        Bar and how to use it effectively.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Progress>
                                <Progress.Bar
                                  className="w-1/2"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-2/3"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-3/4"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="flex flex-col gap-2">
              <Progress>
                <Progress.Bar
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-2/3"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-3/4"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
            </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The Basic Progress Bar is a fundamental component for
                        enhancing user experience by providing clear feedback on
                        task progress. By following the steps outlined above,
                        you can easily integrate it into your project and tailor
                        it to meet your specific requirements.
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
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Progress Bar with Label
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
                        The Progress Bar with Label component combines a visual
                        progress bar with a text label to provide users with a
                        clear indication of progress. This section introduces
                        the Progress Bar with Label and how to integrate it into
                        your project effectively.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Progress className="h-4">
                                <Progress.Bar
                                  className="w-1/2"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  50%
                                </Progress.Bar>
                              </Progress>
                              <Progress className="h-4">
                                <Progress.Bar
                                  className="w-2/3"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  60%
                                </Progress.Bar>
                              </Progress>
                              <Progress className="h-4">
                                <Progress.Bar
                                  className="w-3/4"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  70%
                                </Progress.Bar>
                              </Progress>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="flex flex-col gap-2">
              <Progress className="h-4">
                <Progress.Bar
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  50%
                </Progress.Bar>
              </Progress>
              <Progress className="h-4">
                <Progress.Bar
                  className="w-2/3"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  60%
                </Progress.Bar>
              </Progress>
              <Progress className="h-4">
                <Progress.Bar
                  className="w-3/4"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  70%
                </Progress.Bar>
              </Progress>
            </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The Progress Bar with Label component is a valuable
                        addition to your user interface, offering both visual
                        and textual progress updates. By following the steps
                        outlined above, you can seamlessly integrate it into
                        your project and tailor it to suit your specific
                        requirements.
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
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Progress Bar Height
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
                        The "Progress Bar Height" section explains how to
                        control the height of progress bars to suit your
                        project's design and layout. Customizing the height
                        allows you to integrate progress bars seamlessly into
                        your application's visual hierarchy.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Progress className="h-1">
                                <Progress.Bar
                                  className="w-1/2"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-2/3"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress className="h-3">
                                <Progress.Bar
                                  className="w-3/4"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="flex flex-col gap-2">
              <Progress className="h-1">
                <Progress.Bar
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-2/3"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress className="h-3">
                <Progress.Bar
                  className="w-3/4"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
            </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Progress Bar Height" section has demonstrated how
                        to control the height of progress bars in your project.
                        By following these guidelines and maintaining
                        consistency, you can create visually appealing and
                        accessible progress bars that align with your
                        application's design.
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
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Progress Bar Color
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
                        The "Progress Bar Color" section explains how to
                        customize the colors of progress bars to enhance your
                        application's visual appeal and convey information
                        effectively. You can choose from a variety of colors to
                        match your brand's identity or signify different stages
                        of a process.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Progress>
                                <Progress.Bar
                                  className="w-1/2"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-2/3 bg-success"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-3/4 bg-warning"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-3/4 bg-danger"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="flex flex-col gap-2">
              <Progress>
                <Progress.Bar
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-2/3 bg-success"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-3/4 bg-warning"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-3/4 bg-danger"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
            </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Progress Bar Color" section has shown you how to
                        customize the colors of progress bars to align with your
                        application's design and convey meaning effectively. By
                        choosing the right colors and considering accessibility,
                        you can enhance the user experience and make progress
                        bars an integral part of your application's UI.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
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
                    <div className="-mt-px">Progress</div>
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
                          <Table.Td className="text-center" colSpan={3}>
                            No spesific props
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute left-0 px-3 ml-4 -mt-2.5 font-medium bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Progress.Bar</div>
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
                          <Table.Td className="text-center" colSpan={3}>
                            No spesific props
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
                    Basic Progress Bar
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Progress Bar with Label
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Progress Bar Height
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Progress Bar Color
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
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
