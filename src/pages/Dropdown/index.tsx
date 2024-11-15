import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormInput, FormSwitch } from "@/components/Base/Form";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            Dropdown
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            Explore the flexibility of our Dropdown component for creating
            interactive menus and selection options in your web applications.
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
                        Basic Dropdown
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
                        Dropdown menus are a fundamental user interface
                        component that allows users to choose from a list of
                        options in a collapsible format. This section covers the
                        creation and usage of basic dropdowns in your web
                        applications using the `Menu` component.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center">
                              <Menu>
                                <Menu.Button as={Button} variant="primary">
                                  Show Dropdown
                                </Menu.Button>
                                <Menu.Items className="w-40">
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    Show Dropdown
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item>New Dropdown</Menu.Item>
                    <Menu.Item>Delete Dropdown</Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Experiment with the provided code and customize it to
                        suit your specific needs. Dropdowns can improve user
                        experience by simplifying navigation and interaction
                        within your application.
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
                        Header & Footer Dropdown
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
                        Dropdown menus often require additional elements such as
                        headers and footers to provide context or additional
                        information. This section covers how to create dropdowns
                        with both headers and footers using the `Menu`
                        component.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center">
                              <Menu>
                                <Menu.Button as={Button} variant="primary">
                                  Show Dropdown
                                </Menu.Button>
                                <Menu.Items className="w-56">
                                  <Menu.Header>Export Options</Menu.Header>
                                  <Menu.Divider />
                                  <Menu.Item>
                                    <Lucide
                                      icon="Activity"
                                      className="w-4 h-4 mr-2"
                                    />
                                    English
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="Box"
                                      className="w-4 h-4 mr-2"
                                    />
                                    Indonesia
                                    <div className="px-1 ml-auto text-xs text-white rounded-full bg-danger">
                                      10
                                    </div>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="PanelsTopLeft"
                                      className="w-4 h-4 mr-2"
                                    />
                                    English
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="PanelRight"
                                      className="w-4 h-4 mr-2"
                                    />
                                    Indonesia
                                  </Menu.Item>
                                  <Menu.Divider />
                                  <Menu.Footer>
                                    <Button
                                      type="button"
                                      variant="primary"
                                      className="px-2 py-1"
                                    >
                                      Settings
                                    </Button>
                                    <Button
                                      type="button"
                                      variant="secondary"
                                      className="px-2 py-1 ml-auto"
                                    >
                                      View Profile
                                    </Button>
                                  </Menu.Footer>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    Show Dropdown
                  </Menu.Button>
                  <Menu.Items className="w-56">
                    <Menu.Header>Export Options</Menu.Header>
                    <Menu.Divider />
                    <Menu.Item>
                      <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                      English
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Box" className="w-4 h-4 mr-2" />
                      Indonesia
                      <div className="px-1 ml-auto text-xs text-white rounded-full bg-danger">
                        10
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="PanelsTopLeft" className="w-4 h-4 mr-2" />
                      English
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Sidebar" className="w-4 h-4 mr-2" />
                      Indonesia
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Footer>
                      <Button
                        type="button"
                        variant="primary"
                        className="px-2 py-1"
                      >
                        Settings
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        className="px-2 py-1 ml-auto"
                      >
                        View Profile
                      </Button>
                    </Menu.Footer>
                  </Menu.Items>
                </Menu>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Dropdowns with headers and footers provide a structured
                        way to present options and information to users. They
                        can be particularly useful in situations where you need
                        to group related items or provide additional context.
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
                        Icon Dropdown
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
                        Icon dropdowns can add visual cues and improve user
                        experience when selecting options. This section covers
                        how to create dropdowns with icons using the `Menu`
                        component.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center">
                              <Menu>
                                <Menu.Button as={Button} variant="primary">
                                  Show Dropdown
                                </Menu.Button>
                                <Menu.Items className="w-48">
                                  <Menu.Item>
                                    <Lucide
                                      icon="FilePen"
                                      className="w-4 h-4 mr-2"
                                    />{" "}
                                    New Dropdown
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="Trash"
                                      className="w-4 h-4 mr-2"
                                    />{" "}
                                    Delete Dropdown
                                  </Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    Show Dropdown
                  </Menu.Button>
                  <Menu.Items className="w-48">
                    <Menu.Item>
                      <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> New
                      Dropdown
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                      Delete Dropdown
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Icon dropdowns provide a visual aid to users when
                        selecting options, making the interface more intuitive
                        and user-friendly. Experiment with different icons and
                        styles to create dropdowns that best suit your
                        application's design and user needs.
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
                        Dropdown with Close Button
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
                        Dropdowns with close buttons are a user-friendly way to
                        provide options while allowing users to dismiss the
                        dropdown when needed. This section covers how to create
                        dropdowns with a close button using the `Menu`
                        component.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              <Popover className="inline-block">
                                {({ close }) => (
                                  <>
                                    <Popover.Button
                                      as={Button}
                                      variant="primary"
                                    >
                                      Filter Dropdown
                                      <Lucide
                                        icon="ChevronDown"
                                        className="w-4 h-4 ml-2"
                                      />
                                    </Popover.Button>
                                    <Popover.Panel placement="bottom-start">
                                      <div className="p-2">
                                        <div>
                                          <div className="text-xs text-left">
                                            From
                                          </div>
                                          <FormInput
                                            type="text"
                                            className="flex-1 mt-2"
                                            placeholder="example@gmail.com"
                                          />
                                        </div>
                                        <div className="mt-3">
                                          <div className="text-xs text-left">
                                            To
                                          </div>
                                          <FormInput
                                            type="text"
                                            className="flex-1 mt-2"
                                            placeholder="example@gmail.com"
                                          />
                                        </div>
                                        <div className="flex items-center mt-3">
                                          <Button
                                            variant="secondary"
                                            onClick={() => {
                                              close();
                                            }}
                                            className="w-32 ml-auto"
                                          >
                                            Close
                                          </Button>
                                          <Button
                                            variant="primary"
                                            className="w-32 ml-2"
                                          >
                                            Search
                                          </Button>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </>
                                )}
                              </Popover>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                <Popover className="inline-block">
                  {({ close }) => (
                    <>
                      <Popover.Button
                        as={Button}
                        variant="primary"
                      >
                        Filter Dropdown
                        <Lucide
                          icon="ChevronDown"
                          className="w-4 h-4 ml-2"
                        />
                      </Popover.Button>
                      <Popover.Panel placement="bottom-start">
                        <div className="p-2">
                          <div>
                            <div className="text-xs text-left">From</div>
                            <FormInput
                              type="text"
                              className="flex-1 mt-2"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="mt-3">
                            <div className="text-xs text-left">To</div>
                            <FormInput
                              type="text"
                              className="flex-1 mt-2"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="flex items-center mt-3">
                            <Button
                              variant="secondary"
                              onClick={() => {
                                close();
                              }}
                              className="w-32 ml-auto"
                            >
                              Close
                            </Button>
                            <Button
                              variant="primary"
                              className="w-32 ml-2"
                            >
                              Search
                            </Button>
                          </div>
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Dropdowns with close buttons offer improved user
                        interaction, allowing users to easily dismiss the
                        dropdown when it's no longer needed. Customize the
                        appearance and behavior of the close button to fit your
                        application's requirements.
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
                        Scrolled Dropdown
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
                        Scrolled dropdowns are useful when you have a long list
                        of options to display in a dropdown menu. By limiting
                        the height of the dropdown and enabling scrolling, you
                        can provide a more compact and user-friendly interface.
                        This section covers how to create scrolled dropdowns
                        using the `Menu` component.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center">
                              <Menu>
                                <Menu.Button as={Button} variant="primary">
                                  Show Dropdown
                                </Menu.Button>
                                <Menu.Items className="w-40 h-32 overflow-y-auto">
                                  <Menu.Item>January</Menu.Item>
                                  <Menu.Item>February</Menu.Item>
                                  <Menu.Item>March</Menu.Item>
                                  <Menu.Item>June</Menu.Item>
                                  <Menu.Item>July</Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    Show Dropdown
                  </Menu.Button>
                  <Menu.Items className="w-40 h-32 overflow-y-auto">
                    <Menu.Item>January</Menu.Item>
                    <Menu.Item>February</Menu.Item>
                    <Menu.Item>March</Menu.Item>
                    <Menu.Item>June</Menu.Item>
                    <Menu.Item>July</Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Scrolled dropdowns are a practical solution when dealing
                        with long lists of options in a limited space. By
                        enabling scrolling, you can keep the dropdown compact
                        and user-friendly. Customize the appearance and behavior
                        of the scrollbar and dropdown to align with your
                        application's style and requirements.
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
                        Header & Icon Dropdown
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
                        Header and icon dropdowns are a great way to categorize
                        and visually enhance your dropdown menus. This section
                        covers how to create dropdowns with headers and icons
                        using the `Menu` component.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center">
                              <Menu>
                                <Menu.Button as={Button} variant="primary">
                                  Show Dropdown
                                </Menu.Button>
                                <Menu.Items className="w-40">
                                  <Menu.Header>Export Tools</Menu.Header>
                                  <Menu.Divider />
                                  <Menu.Item>
                                    <Lucide
                                      icon="Printer"
                                      className="w-4 h-4 mr-2"
                                    />
                                    Print
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="ExternalLink"
                                      className="w-4 h-4 mr-2"
                                    />
                                    Excel
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="FileText"
                                      className="w-4 h-4 mr-2"
                                    />
                                    CSV
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="Archive"
                                      className="w-4 h-4 mr-2"
                                    />
                                    PDF
                                  </Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    Show Dropdown
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Header>Export Tools</Menu.Header>
                    <Menu.Divider />
                    <Menu.Item>
                      <Lucide icon="Printer" className="w-4 h-4 mr-2" />
                      Print
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide
                        icon="ExternalLink"
                        className="w-4 h-4 mr-2"
                      />
                      Excel
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                      CSV
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Archive" className="w-4 h-4 mr-2" />
                      PDF
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Header and icon dropdowns provide a clear and visually
                        appealing way to present grouped menu items. Customize
                        the appearance and behavior of headers, icons, and
                        dropdown items to align with your application's style
                        and requirements.
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
                        Dropdown Placement
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
                        Dropdown placement allows you to control where the
                        dropdown menu appears in relation to the triggering
                        button or element. This section covers how to specify
                        the placement of a dropdown menu using the `Menu`
                        component.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Top Start
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="top-start"
                                >
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Top
                                </Menu.Button>
                                <Menu.Items className="w-40" placement="top">
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Top End
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="top-end"
                                >
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Right Start
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="right-start"
                                >
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Right
                                </Menu.Button>
                                <Menu.Items className="w-40" placement="right">
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Right End
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="right-end"
                                >
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Bottom End
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="bottom-end"
                                >
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Bottom
                                </Menu.Button>
                                <Menu.Items className="w-40" placement="bottom">
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Bottom Start
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="bottom-start"
                                >
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Left Start
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="left-start"
                                >
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Left
                                </Menu.Button>
                                <Menu.Items className="w-40" placement="left">
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 mr-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  Left End
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="left-end"
                                >
                                  <Menu.Item>New Dropdown</Menu.Item>
                                  <Menu.Item>Delete Dropdown</Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="text-center">
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Top Start
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="top-start">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Top
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="top">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Top End
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="top-end">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Right Start
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="right-start">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Right
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="right">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Right End
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="right-end">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Bottom End
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="bottom-end">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Bottom
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="bottom">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Bottom Start
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="bottom-start">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Left Start
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="left-start">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Left
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="left">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 mr-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      Left End
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="left-end">
                      <Menu.Item>New Dropdown</Menu.Item>
                      <Menu.Item>Delete Dropdown</Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Dropdown placement is a crucial aspect of dropdown
                        design. By controlling where the dropdown appears, you
                        can ensure that it fits within your application's layout
                        and provides a seamless user experience.
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
                    <div className="-mt-px">Menu</div>
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
                    <div className="-mt-px">Menu.Button</div>
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
                          <Table.Td>`as`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            The HTML element or React component type to render
                            as the button
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute left-0 px-3 ml-4 -mt-2.5 font-medium bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Menu.Items</div>
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
                          <Table.Td>`placement`</Table.Td>
                          <Table.Td>
                            `top-start`, `top`, `top-end`, `right-start`,
                            `right`, `right-end`, `bottom-end`, `bottom`,
                            `bottom-start`, `left-start`, `left`, `left-end`
                          </Table.Td>
                          <Table.Td>
                            Determines the positioning of the dropdown menu
                            relative to its trigger element. Choose from options
                            such as 'top', 'bottom', 'left', or 'right' to
                            control the direction in which the menu expands.
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute left-0 px-3 ml-4 -mt-2.5 font-medium bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Menu.Item</div>
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
                    <div className="-mt-px">Menu.Divider</div>
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
                    <div className="-mt-px">Menu.Header</div>
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
                    <div className="-mt-px">Menu.Footer</div>
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
                    Basic Dropdown
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Header & Footer Dropdown
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Icon Dropdown
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Dropdown with Close Button
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Scrolled Dropdown
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Header & Icon Dropdown
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Dropdown Placement
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
