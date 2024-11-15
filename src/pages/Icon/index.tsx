import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import Lucide from "@/components/Base/Lucide";
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
            Icon
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            Unleash the power of our Icon component to add a touch of visual
            appeal and meaning to your web content.
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
                        Lucide Icon
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
                        Icons are graphical symbols used to represent objects,
                        actions, or concepts in a visual way. They are commonly
                        used in web development to enhance the user interface
                        and provide a more intuitive and visually appealing
                        experience. This section covers how to use icons in your
                        web application and provides examples of how to
                        integrate and style them effectively.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="grid grid-cols-12 py-3 sm:gap-7 gap-y-6">
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Activity"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ActivityIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Airplay"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  AirplayIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="AlertCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  AlertCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="AlertOctagon"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  AlertOctagonIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="AlertTriangle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  AlertTriangleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="AlignCenter"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  AlignCenterIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="AlignJustify"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  AlignJustifyIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="AlignLeft"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  AlignLeftIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="AlignRight"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  AlignRightIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Anchor"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  AnchorIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Aperture"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ApertureIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Archive"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArchiveIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowDownCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowDownCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowDownLeft"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowDownLeftIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowDownRight"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowDownRightIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowDown"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowDownIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowLeftCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowLeftCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowLeft"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowLeftIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowRightCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowRightCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowRight"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowRightIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowUpCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowUpCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowUpLeft"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowUpLeftIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowUpRight"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowUpRightIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ArrowUp"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ArrowUpIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="AtSign"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  AtSignIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Award"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  AwardIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="BarChart2"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  BarChart2Icon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="BarChart"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  BarChartIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="BatteryCharging"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  BatteryChargingIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Battery"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  BatteryIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="BellOff"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  BellOffIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Bell" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  BellIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Bluetooth"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  BluetoothIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Bold" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  BoldIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="BookOpen"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  BookOpenIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Book" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  BookIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Bookmark"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  BookmarkIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Box" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  BoxIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Briefcase"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  BriefcaseIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Calendar"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CalendarIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CameraOff"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CameraOffIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Camera"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CameraIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Cast" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  CastIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CheckCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CheckCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CheckSquare"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CheckSquareIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Check"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CheckIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ChevronDown"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ChevronDownIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ChevronLeft"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ChevronLeftIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ChevronRight"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ChevronRightIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ChevronUp"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ChevronUpIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ChevronsDown"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ChevronsDownIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ChevronsLeft"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ChevronsLeftIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ChevronsRight"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ChevronsRightIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ChevronsUp"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ChevronsUpIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Chrome"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ChromeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Circle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Clipboard"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ClipboardIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Clock"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ClockIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CloudDrizzle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CloudDrizzleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CloudLightning"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CloudLightningIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CloudOff"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CloudOffIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CloudRain"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CloudRainIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CloudSnow"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CloudSnowIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Cloud"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CloudIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Code" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  CodeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Codepen"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CodepenIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Codesandbox"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CodesandboxIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Coffee"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CoffeeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Columns2"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  Columns2Icon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Command"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CommandIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Compass"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CompassIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Copy" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  CopyIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CornerDownLeft"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CornerDownLeftIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CornerDownRight"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CornerDownRightIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CornerLeftDown"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CornerLeftDownIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CornerLeftUp"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CornerLeftUpIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CornerRightDown"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CornerRightDownIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CornerRightUp"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CornerRightUpIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CornerUpLeft"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CornerUpLeftIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CornerUpRight"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CornerUpRightIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Cpu" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  CpuIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="CreditCard"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CreditCardIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Crop" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  CropIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Crosshair"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  CrosshairIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Database"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  DatabaseIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Delete"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  DeleteIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Disc" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  DiscIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="DivideCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  DivideCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="DivideSquare"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  DivideSquareIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Divide"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  DivideIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="DollarSign"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  DollarSignIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="DownloadCloud"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  DownloadCloudIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Download"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  DownloadIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Dribbble"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  DribbbleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Droplet"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  DropletIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ExternalLink"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ExternalLinkIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="EyeOff"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  EyeOffIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Eye" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  EyeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Facebook"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FacebookIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="FastForward"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FastForwardIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Figma"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FigmaIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="FileMinus"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FileMinusIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="FilePlus"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FilePlusIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="FileText"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FileTextIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="File" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  FileIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Film" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  FilmIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Filter"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FilterIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Flag" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  FlagIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="FolderMinus"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FolderMinusIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="FolderPlus"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FolderPlusIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Folder"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FolderIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Framer"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FramerIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Frown"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  FrownIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Gift" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  GiftIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="GitBranch"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  GitBranchIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="GitCommitHorizontal"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  GitCommitHorizontal
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="GitMerge"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  GitMergeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="GitPullRequest"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  GitPullRequestIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Github"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  GithubIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Gitlab"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  GitlabIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Globe"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  GlobeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="LayoutGrid"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  GridIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="HardDrive"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  HardDriveIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Hash" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  HashIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Headphones"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  HeadphonesIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Heart"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  HeartIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="HelpCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  HelpCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Hexagon"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  HexagonIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Home" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  HomeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Image"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ImageIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Inbox"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  InboxIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Info" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  InfoIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Instagram"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  InstagramIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Italic"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ItalicIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Key" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  KeyIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Layers"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  LayersIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PanelsTopLeft"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  LayoutIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="LifeBuoy"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  LifeBuoyIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Link2"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  Link2Icon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Link" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  LinkIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Linkedin"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  LinkedinIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="List" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  ListIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Loader"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  LoaderIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Lock" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  LockIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="LogIn"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  LogInIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="LogOut"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  LogOutIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Mail" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  MailIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="MapPin"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MapPinIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Map" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  MapIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Maximize2"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  Maximize2Icon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Maximize"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MaximizeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Meh" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  MehIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Menu" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  MenuIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="MessageCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MessageCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="MessageSquare"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MessageSquareIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="MicOff"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MicOffIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Mic" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  MicIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Minimize2"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  Minimize2Icon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Minimize"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MinimizeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="MinusCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MinusCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="MinusSquare"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MinusSquareIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Minus"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MinusIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Monitor"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MonitorIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Moon" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  MoonIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="MoreHorizontal"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MoreHorizontalIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="MoreVertical"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MoreVerticalIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="MousePointer"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MousePointerIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Move" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  MoveIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Music"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  MusicIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Navigation2"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  Navigation2Icon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Navigation"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  NavigationIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Octagon"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  OctagonIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Package"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PackageIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Paperclip"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PaperclipIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PauseCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PauseCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Pause"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PauseIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PenTool"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PenToolIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Percent"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PercentIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PhoneCall"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PhoneCallIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PhoneForwarded"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PhoneForwardedIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PhoneIncoming"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PhoneIncomingIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PhoneMissed"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PhoneMissedIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PhoneOff"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PhoneOffIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PhoneOutgoing"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PhoneOutgoingIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Phone"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PhoneIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PieChart"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PieChartIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PlayCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PlayCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Play" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  PlayIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PlusCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PlusCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="PlusSquare"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PlusSquareIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Plus" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  PlusIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Pocket"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PocketIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Power"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PowerIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Printer"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  PrinterIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Radio"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  RadioIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="RefreshCcw"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  RefreshCcwIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="RefreshCw"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  RefreshCwIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Repeat"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  RepeatIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Rewind"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  RewindIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="RotateCcw"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  RotateCcwIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="RotateCw"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  RotateCwIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Rss" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  RssIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Save" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  SaveIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Scissors"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ScissorsIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Search"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SearchIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Send" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  SendIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Server"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ServerIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Settings"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SettingsIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Share2"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  Share2Icon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Share"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ShareIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ShieldOff"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ShieldOffIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Shield"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ShieldIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ShoppingBag"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ShoppingBagIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ShoppingCart"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ShoppingCartIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Shuffle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ShuffleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="SkipBack"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SkipBackIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="SkipForward"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SkipForwardIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Slack"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SlackIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Sliders"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SlidersIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Smartphone"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SmartphoneIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Smile"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SmileIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Speaker"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SpeakerIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Square"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SquareIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Star" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  StarIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="StopCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  StopCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Sun" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  SunIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Sunrise"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SunriseIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Sunset"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  SunsetIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Tablet"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  TabletIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Tag" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  TagIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Target"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  TargetIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Terminal"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  TerminalIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Thermometer"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ThermometerIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ThumbsDown"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ThumbsDownIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ThumbsUp"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ThumbsUpIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ToggleLeft"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ToggleLeftIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ToggleRight"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ToggleRightIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Trash2"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  Trash2Icon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Trash"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  TrashIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Trello"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  TrelloIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="TrendingDown"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  TrendingDownIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="TrendingUp"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  TrendingUpIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Triangle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  TriangleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Truck"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  TruckIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Tv" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  TvIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Twitch"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  TwitchIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Twitter"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  TwitterIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Type" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  TypeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Umbrella"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  UmbrellaIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Underline"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  UnderlineIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Unlock"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  UnlockIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="UploadCloud"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  UploadCloudIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Upload"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  UploadIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="UserCheck"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  UserCheckIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="UserMinus"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  UserMinusIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="UserPlus"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  UserPlusIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="UserX"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  UserXIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="User" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  UserIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Users"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  UsersIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="VideoOff"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  VideoOffIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Video"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  VideoIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Voicemail"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  VoicemailIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Volume1"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  Volume1Icon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Volume2"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  Volume2Icon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="VolumeX"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  VolumeXIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Volume"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  VolumeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Watch"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  WatchIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="WifiOff"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  WifiOffIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Wifi" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  WifiIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Wind" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  WindIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="XCircle"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  XCircleIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="XOctagon"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  XOctagonIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="XSquare"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  XSquareIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="X" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  XIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="Youtube"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  YoutubeIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ZapOff"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ZapOffIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide icon="Zap" className="block mx-auto" />
                                <div className="mt-2 text-xs text-center">
                                  ZapIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ZoomIn"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ZoomInIcon
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <Lucide
                                  icon="ZoomOut"
                                  className="block mx-auto"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ZoomOutIcon
                                </div>
                              </div>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="grid grid-cols-12 py-3 sm:gap-7 gap-y-6">
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Activity"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ActivityIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Airplay"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  AirplayIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="AlertCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  AlertCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="AlertOctagon"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  AlertOctagonIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="AlertTriangle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  AlertTriangleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="AlignCenter"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  AlignCenterIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="AlignJustify"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  AlignJustifyIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="AlignLeft"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  AlignLeftIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="AlignRight"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  AlignRightIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Anchor"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  AnchorIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Aperture"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ApertureIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Archive"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArchiveIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowDownCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowDownCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowDownLeft"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowDownLeftIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowDownRight"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowDownRightIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowDown"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowDownIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowLeftCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowLeftCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowLeft"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowLeftIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowRightCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowRightCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowRight"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowRightIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowUpCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowUpCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowUpLeft"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowUpLeftIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowUpRight"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowUpRightIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ArrowUp"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ArrowUpIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="AtSign"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  AtSignIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Award"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  AwardIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="BarChart2"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  BarChart2Icon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="BarChart"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  BarChartIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="BatteryCharging"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  BatteryChargingIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Battery"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  BatteryIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="BellOff"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  BellOffIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Bell" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  BellIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Bluetooth"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  BluetoothIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Bold" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  BoldIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="BookOpen"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  BookOpenIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Book" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  BookIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Bookmark"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  BookmarkIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Box" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  BoxIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Briefcase"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  BriefcaseIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Calendar"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CalendarIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CameraOff"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CameraOffIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Camera"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CameraIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Cast" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  CastIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CheckCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CheckCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CheckSquare"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CheckSquareIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Check"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CheckIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ChevronDown"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ChevronDownIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ChevronLeft"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ChevronLeftIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ChevronRight"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ChevronRightIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ChevronUp"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ChevronUpIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ChevronsDown"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ChevronsDownIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ChevronsLeft"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ChevronsLeftIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ChevronsRight"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ChevronsRightIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ChevronsUp"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ChevronsUpIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Chrome"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ChromeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Circle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Clipboard"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ClipboardIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Clock"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ClockIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CloudDrizzle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CloudDrizzleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CloudLightning"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CloudLightningIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CloudOff"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CloudOffIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CloudRain"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CloudRainIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CloudSnow"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CloudSnowIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Cloud"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CloudIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Code" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  CodeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Codepen"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CodepenIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Codesandbox"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CodesandboxIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Coffee"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CoffeeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Columns"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ColumnsIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Command"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CommandIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Compass"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CompassIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Copy" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  CopyIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CornerDownLeft"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CornerDownLeftIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CornerDownRight"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CornerDownRightIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CornerLeftDown"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CornerLeftDownIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CornerLeftUp"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CornerLeftUpIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CornerRightDown"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CornerRightDownIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CornerRightUp"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CornerRightUpIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CornerUpLeft"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CornerUpLeftIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CornerUpRight"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CornerUpRightIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Cpu" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  CpuIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="CreditCard"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CreditCardIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Crop" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  CropIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Crosshair"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  CrosshairIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Database"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  DatabaseIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Delete"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  DeleteIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Disc" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  DiscIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="DivideCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  DivideCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="DivideSquare"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  DivideSquareIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Divide"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  DivideIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="DollarSign"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  DollarSignIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="DownloadCloud"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  DownloadCloudIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Download"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  DownloadIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Dribbble"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  DribbbleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Droplet"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  DropletIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ExternalLink"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ExternalLinkIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="EyeOff"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  EyeOffIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Eye" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  EyeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Facebook"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FacebookIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="FastForward"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FastForwardIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Figma"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FigmaIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="FileMinus"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FileMinusIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="FilePlus"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FilePlusIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="FileText"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FileTextIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="File" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  FileIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Film" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  FilmIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Filter"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FilterIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Flag" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  FlagIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="FolderMinus"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FolderMinusIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="FolderPlus"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FolderPlusIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Folder"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FolderIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Framer"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FramerIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Frown"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  FrownIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Gift" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  GiftIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="GitBranch"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  GitBranchIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="GitCommit"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  GitCommitIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="GitMerge"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  GitMergeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="GitPullRequest"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  GitPullRequestIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Github"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  GithubIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Gitlab"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  GitlabIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Globe"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  GlobeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="LayoutGrid" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  GridIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="HardDrive"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  HardDriveIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Hash" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  HashIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Headphones"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  HeadphonesIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Heart"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  HeartIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="HelpCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  HelpCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Hexagon"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  HexagonIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Home" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  HomeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Image"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ImageIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Inbox"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  InboxIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Info" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  InfoIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Instagram"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  InstagramIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Italic"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ItalicIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Key" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  KeyIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Layers"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  LayersIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PanelsTopLeft"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  LayoutIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="LifeBuoy"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  LifeBuoyIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Link2"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  Link2Icon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Link" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  LinkIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Linkedin"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  LinkedinIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="List" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  ListIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Loader"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  LoaderIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Lock" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  LockIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="LogIn"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  LogInIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="LogOut"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  LogOutIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Mail" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  MailIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="MapPin"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MapPinIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Map" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  MapIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Maximize2"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  Maximize2Icon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Maximize"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MaximizeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Meh" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  MehIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Menu" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  MenuIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="MessageCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MessageCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="MessageSquare"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MessageSquareIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="MicOff"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MicOffIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Mic" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  MicIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Minimize2"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  Minimize2Icon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Minimize"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MinimizeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="MinusCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MinusCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="MinusSquare"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MinusSquareIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Minus"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MinusIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Monitor"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MonitorIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Moon" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  MoonIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="MoreHorizontal"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MoreHorizontalIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="MoreVertical"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MoreVerticalIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="MousePointer"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MousePointerIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Move" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  MoveIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Music"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  MusicIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Navigation2"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  Navigation2Icon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Navigation"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  NavigationIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Octagon"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  OctagonIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Package"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PackageIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Paperclip"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PaperclipIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PauseCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PauseCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Pause"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PauseIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PenTool"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PenToolIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Percent"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PercentIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PhoneCall"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PhoneCallIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PhoneForwarded"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PhoneForwardedIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PhoneIncoming"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PhoneIncomingIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PhoneMissed"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PhoneMissedIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PhoneOff"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PhoneOffIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PhoneOutgoing"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PhoneOutgoingIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Phone"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PhoneIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PieChart"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PieChartIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PlayCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PlayCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Play" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  PlayIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PlusCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PlusCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="PlusSquare"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PlusSquareIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Plus" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  PlusIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Pocket"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PocketIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Power"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PowerIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Printer"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  PrinterIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Radio"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  RadioIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="RefreshCcw"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  RefreshCcwIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="RefreshCw"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  RefreshCwIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Repeat"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  RepeatIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Rewind"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  RewindIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="RotateCcw"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  RotateCcwIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="RotateCw"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  RotateCwIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Rss" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  RssIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Save" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  SaveIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Scissors"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ScissorsIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Search"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SearchIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Send" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  SendIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Server"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ServerIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Settings"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SettingsIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Share2"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  Share2Icon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Share"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ShareIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ShieldOff"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ShieldOffIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Shield"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ShieldIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ShoppingBag"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ShoppingBagIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ShoppingCart"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ShoppingCartIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Shuffle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ShuffleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="SkipBack"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SkipBackIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="SkipForward"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SkipForwardIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Slack"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SlackIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Sliders"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SlidersIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Smartphone"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SmartphoneIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Smile"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SmileIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Speaker"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SpeakerIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Square"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SquareIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Star" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  StarIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="StopCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  StopCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Sun" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  SunIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Sunrise"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SunriseIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Sunset"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  SunsetIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Tablet"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  TabletIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Tag" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  TagIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Target"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  TargetIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Terminal"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  TerminalIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Thermometer"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ThermometerIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ThumbsDown"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ThumbsDownIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ThumbsUp"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ThumbsUpIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ToggleLeft"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ToggleLeftIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ToggleRight"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ToggleRightIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Trash2"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  Trash2Icon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Trash"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  TrashIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Trello"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  TrelloIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="TrendingDown"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  TrendingDownIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="TrendingUp"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  TrendingUpIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Triangle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  TriangleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Truck"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  TruckIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Tv" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  TvIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Twitch"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  TwitchIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Twitter"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  TwitterIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Type" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  TypeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Umbrella"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  UmbrellaIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Underline"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  UnderlineIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Unlock"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  UnlockIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="UploadCloud"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  UploadCloudIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Upload"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  UploadIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="UserCheck"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  UserCheckIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="UserMinus"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  UserMinusIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="UserPlus"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  UserPlusIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="UserX"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  UserXIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="User" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  UserIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Users"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  UsersIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="VideoOff"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  VideoOffIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Video"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  VideoIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Voicemail"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  VoicemailIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Volume1"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  Volume1Icon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Volume2"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  Volume2Icon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="VolumeX"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  VolumeXIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Volume"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  VolumeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Watch"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  WatchIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="WifiOff"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  WifiOffIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Wifi" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  WifiIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Wind" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  WindIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="XCircle"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  XCircleIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="XOctagon"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  XOctagonIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="XSquare"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  XSquareIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="X" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  XIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="Youtube"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  YoutubeIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ZapOff"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ZapOffIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide icon="Zap" className="block mx-auto" />
                <div className="mt-2 text-xs text-center">
                  ZapIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ZoomIn"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ZoomInIcon
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Lucide
                  icon="ZoomOut"
                  className="block mx-auto"
                />
                <div className="mt-2 text-xs text-center">
                  ZoomOutIcon
                </div>
              </div>
            </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
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
                    <div className="-mt-px">Lucide</div>
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
                          <Table.Td>`keyof typeof icons`</Table.Td>
                          <Table.Td>
                            Specifies the name of the Lucide icon to render
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
                    Lucide Icon
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
