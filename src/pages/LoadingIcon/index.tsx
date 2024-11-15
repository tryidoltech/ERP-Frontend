import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import LoadingIcon from "@/components/Base/LoadingIcon";
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
            Loading Icon
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            Discover the simplicity and effectiveness of our Loading Icon
            component
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
                        Available Icons
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
                        Loading icons are used to indicate that a process is in
                        progress or that the application is fetching data. They
                        provide visual feedback to users, letting them know that
                        an action is being executed. This section covers how to
                        use loading icons in your web application and provides
                        examples of different loading icon styles.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="grid grid-cols-12 py-3 sm:gap-7 gap-y-6">
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="audio"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  audio
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="ball-triangle"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ball-triangle
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="bars"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  bars
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="circles"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  circles
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="grid"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  grid
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="hearts"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  hearts
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="oval"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  oval
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="puff"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  puff
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="rings"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  rings
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="spinning-circles"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  spinning-circles
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="tail-spin"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  tail-spin
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="three-dots"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  three-dots
                                </div>
                              </div>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="grid grid-cols-12 py-3 sm:gap-7 gap-y-6">
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="audio" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  audio
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="ball-triangle"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  ball-triangle
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="bars" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  bars
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="circles"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  circles
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="grid" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  grid
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="hearts"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  hearts
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="oval" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  oval
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="puff" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  puff
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="rings" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  rings
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="spinning-circles"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  spinning-circles
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="tail-spin"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  tail-spin
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="three-dots"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  three-dots
                </div>
              </div>
            </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Loading icons are essential for providing feedback to
                        users during asynchronous operations. By using the
                        `LoadingIcon` component and customizing its appearance,
                        you can create a consistent and visually appealing
                        loading experience in your web application. Be sure to
                        choose an appropriate loading icon style that matches
                        your application's design and provides clear feedback to
                        users.
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
                    <div className="-mt-px">Tab</div>
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
                          <Table.Td>`icon`</Table.Td>
                          <Table.Td>
                            `audio`, `ball-triangle`, `bars`, `circles` ,
                            `grid`, `hearts`, `oval`, `puff`, `rings` ,
                            `spinning-circles`, `tail-spin`, `three-dots`
                          </Table.Td>
                          <Table.Td>
                            Specifies the name of the loading icon to render
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`color`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>Specifies the color of the icon</Table.Td>
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
                    Available Icons
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
