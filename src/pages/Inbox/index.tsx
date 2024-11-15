import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import { FormCheck, FormInput, FormSelect } from "@/components/Base/Form";
import TomSelect from "@/components/Base/TomSelect";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import mails from "@/fakers/mails";
import Button from "@/components/Base/Button";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const [selectedUser, setSelectedUser] = useState("1");

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Inbox
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
            >
              <Lucide icon="MailPlus" className="stroke-[1.3] w-4 h-4 mr-2" />{" "}
              Compose New Mail
            </Button>
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
            >
              <Lucide icon="Cog" className="stroke-[1.3] w-4 h-4 mr-2" /> Mail
              Settings
            </Button>
          </div>
        </div>
        <div className="gap-5 flex flex-col sm:flex-row mt-3.5">
          <div className="relative">
            <div className="sticky top-[104px]">
              <div className="box sm:w-[102px] grid grid-cols-3 sm:grid-cols-1 px-3.5 py-4 gap-3.5 before:content-[''] before:z-[-1] box--stacked">
                <Tippy
                  as="a"
                  href=""
                  content="Inbox"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 active place-content-center"
                >
                  <Lucide
                    icon="AppWindow"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                  <div className="min-w-[1.15rem] h-[1.2rem] rounded-full bg-white flex items-center justify-center text-xs font-medium absolute right-0 top-0 -mt-1.5 -mr-1.5">
                    <div className="w-full h-full px-2 border rounded-full bg-pending/10 border-pending/20 text-pending">
                      12+
                    </div>
                  </div>
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Starred"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="MailCheck"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Snoozed"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="KeyRound"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                  <div className="min-w-[1.15rem] h-[1.2rem] rounded-full bg-white flex items-center justify-center text-xs font-medium absolute right-0 top-0 -mt-1.5 -mr-1.5">
                    <div className="w-full h-full px-2 border rounded-full bg-pending/10 border-pending/20 text-pending">
                      3
                    </div>
                  </div>
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Important"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="PackageCheck"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Sent"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="ShieldCheck"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                  <div className="min-w-[1.15rem] h-[1.2rem] rounded-full bg-white flex items-center justify-center text-xs font-medium absolute right-0 top-0 -mt-1.5 -mr-1.5">
                    <div className="w-full h-full px-2 border rounded-full bg-pending/10 border-pending/20 text-pending">
                      41
                    </div>
                  </div>
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Drafts"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="Smartphone"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Categories"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="BellDot"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                  <div className="min-w-[1.15rem] h-[1.2rem] rounded-full bg-white flex items-center justify-center text-xs font-medium absolute right-0 top-0 -mt-1.5 -mr-1.5">
                    <div className="w-full h-full px-2 border rounded-full bg-pending/10 border-pending/20 text-pending">
                      21
                    </div>
                  </div>
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Chats"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="Workflow"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Scheduled"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="Podcast"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="All Mail"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="Trash2"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
              </div>
            </div>
          </div>
          <div className="w-full pb-10 overflow-hidden">
            <div className="flex flex-col w-full box box--stacked">
              <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
                <div>
                  <div className="relative">
                    <Lucide
                      icon="Search"
                      className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                    />
                    <FormInput
                      type="text"
                      placeholder="Search mails..."
                      className="pl-9 sm:w-64 rounded-[0.5rem]"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 sm:ml-auto">
                  <Menu>
                    <Menu.Button
                      as={Button}
                      variant="outline-secondary"
                      className="w-full sm:w-auto"
                    >
                      <Lucide
                        icon="Download"
                        className="stroke-[1.3] w-4 h-4 mr-2"
                      />
                      Export
                      <Lucide
                        icon="ChevronDown"
                        className="stroke-[1.3] w-4 h-4 ml-2"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="FileBarChart" className="w-4 h-4 mr-2" />{" "}
                        PDF
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="FileBarChart" className="w-4 h-4 mr-2" />
                        CSV
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Popover className="inline-block">
                    {({ close }) => (
                      <>
                        <Popover.Button
                          as={Button}
                          variant="outline-secondary"
                          className="w-full sm:w-auto"
                        >
                          <Lucide
                            icon="ArrowDownWideNarrow"
                            className="stroke-[1.3] w-4 h-4 mr-2"
                          />
                          Filter
                          <div className="flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full bg-slate-100 dark:bg-darkmode-400">
                            3
                          </div>
                        </Popover.Button>
                        <Popover.Panel placement="bottom-end">
                          <div className="p-2">
                            <div>
                              <div className="text-left text-slate-500">
                                Sender
                              </div>
                              <TomSelect
                                className="flex-1 mt-2"
                                value={selectedUser}
                                onChange={(e) => {
                                  setSelectedUser(e.target.value);
                                }}
                                options={{
                                  placeholder: "Search user",
                                }}
                              >
                                {users.fakeUsers().map((faker, fakerKey) => (
                                  <option key={fakerKey} value={fakerKey}>
                                    {faker.name}
                                  </option>
                                ))}
                              </TomSelect>
                            </div>
                            <div className="mt-3">
                              <div className="text-left text-slate-500">
                                Status
                              </div>
                              <FormSelect className="flex-1 mt-2">
                                <option value="Read">Read</option>
                                <option value="Unread">Unread</option>
                                <option value="Pinned">Pinned</option>
                              </FormSelect>
                            </div>
                            <div className="flex items-center mt-4">
                              <Button
                                variant="secondary"
                                onClick={() => {
                                  close();
                                }}
                                className="w-32 ml-auto"
                              >
                                Close
                              </Button>
                              <Button variant="primary" className="w-32 ml-2">
                                Apply
                              </Button>
                            </div>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </div>
              </div>
              <div className="px-5 mt-0.5">
                <div className="flex items-center px-5 py-3.5 border shadow-sm border-slate-200/70 rounded-[0.6rem] bg-primary/[0.01] mb-2">
                  <div className="flex items-center">
                    <div className="relative w-5 h-5">
                      <FormCheck.Input
                        type="checkbox"
                        value="checked"
                        onChange={() => {}}
                        className="absolute z-10 w-full h-full opacity-0 peer"
                      />
                      <div className="absolute inset-0 flex shadow-sm items-center justify-center w-[16px] h-[16px] m-auto text-white transition-all border rounded opacity-0 bg-primary/60 border-primary/50 peer-checked:opacity-100">
                        <Lucide icon="Check" className="stroke-[1.5] w-3 h-3" />
                      </div>
                      <div className="absolute inset-0 flex shadow-sm items-center justify-center w-[16px] h-[16px] m-auto transition-all border-[1.5px] rounded text-primary border-primary/30 peer-checked:opacity-0 peer-hover:bg-primary/10"></div>
                    </div>
                    <Lucide
                      icon="ChevronDown"
                      className="stroke-[1.2] w-5 h-5 ml-1 mr-0.5 text-slate-500/80 dark:text-slate-400"
                    />
                  </div>
                  <div className="ml-4 mr-0.5">
                    <Lucide
                      icon="RefreshCcw"
                      className="stroke-[1] w-[17px] h-[17px] text-slate-500/80 dark:text-slate-400"
                    />
                  </div>
                  <div className="ml-4">
                    <Lucide
                      icon="MoreHorizontal"
                      className="stroke-[1] w-[17px] h-[17px] text-slate-500/80 dark:text-slate-400"
                    />
                  </div>
                  <div className="hidden ml-auto sm:block text-slate-500/70 dark:text-slate-400">
                    1 - 50 of 5,238
                  </div>
                  <div className="ml-auto sm:ml-5">
                    <Lucide
                      icon="ArrowLeft"
                      className="stroke-[1] w-[17px] h-[17px] text-slate-500/80 dark:text-slate-400"
                    />
                  </div>
                  <div className="ml-3">
                    <Lucide
                      icon="ArrowRight"
                      className="stroke-[1] w-[17px] h-[17px] text-slate-500/80 dark:text-slate-400"
                    />
                  </div>
                  <div className="ml-5">
                    <Lucide
                      icon="Settings"
                      className="stroke-[1] w-[17px] h-[17px] text-slate-500/80 dark:text-slate-400"
                    />
                  </div>
                </div>
                <div>
                  <div className="shadow-sm overflow-x-auto border rounded-[0.6rem] sm:overflow-x-visible border-slate-200/70 border-t-slate-200/60">
                    {_.take(mails.fakeMails(), 13).map((faker, fakerKey) => (
                      <div
                        key={fakerKey}
                        className={clsx([
                          "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block last:border-b-0 border-b border-slate-200/50 dark:border-darkmode-400",
                          "hover:relative hover:bg-slate-50",
                          !faker.opened &&
                            "bg-primary/[0.03] text-slate-500 dark:text-slate-500 dark:bg-darkmode-400/70",
                          faker.opened &&
                            "dark:text-slate-300 dark:bg-darkmode-600",
                        ])}
                      >
                        <div className="flex items-center px-5 py-3.5">
                          <div>
                            <div className="relative w-5 h-5">
                              <FormCheck.Input
                                type="checkbox"
                                value="checked"
                                checked={!faker.opened}
                                onChange={() => {}}
                                className="absolute z-10 w-full h-full opacity-0 peer"
                              />
                              <div className="absolute inset-0 flex shadow-sm items-center justify-center w-[16px] h-[16px] m-auto text-white transition-all border rounded opacity-0 bg-primary/60 border-primary/50 peer-checked:opacity-100">
                                <Lucide
                                  icon="Check"
                                  className="stroke-[1.5] w-3 h-3"
                                />
                              </div>
                              <div className="absolute inset-0 flex shadow-sm items-center justify-center w-[16px] h-[16px] m-auto transition-all border-[1.5px] rounded text-primary border-primary/30 peer-checked:opacity-0 peer-hover:bg-primary/10"></div>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="relative w-[18px] h-[18px]">
                              <FormCheck.Input
                                type="checkbox"
                                value="checked"
                                onChange={() => {}}
                                className="absolute z-10 w-full h-full opacity-0 peer"
                              />
                              <Lucide
                                icon="Star"
                                className="absolute inset-0 stroke-[1] w-[18px] h-[18px] text-primary/50 fill-primary/[0.03] peer-checked:fill-primary/50 peer-checked:text-primary peer-hover:peer-checked:fill-primary/50 peer-hover:fill-primary/10"
                              />
                            </div>
                          </div>
                          <div className="ml-2.5">
                            <div className="relative w-[17px] h-[17px]">
                              <FormCheck.Input
                                type="checkbox"
                                value="checked"
                                onChange={() => {}}
                                className="absolute z-10 w-full h-full opacity-0 peer"
                              />
                              <Lucide
                                icon="Bookmark"
                                className="absolute inset-0 stroke-[1] w-[17px] h-[17px] text-primary/50 fill-primary/[0.03] peer-checked:fill-primary/50 peer-checked:text-primary peer-hover:peer-checked:fill-primary/50 peer-hover:fill-primary/10"
                              />
                            </div>
                          </div>
                          <div className="flex items-center flex-none w-40 ml-8 mr-5">
                            <div className="relative flex-none w-5 h-5 image-fit">
                              <img
                                alt="Tailwise - Admin Dashboard Template"
                                className="rounded-full"
                                src={faker.sender.photo}
                              />
                            </div>
                            <div
                              className={clsx([
                                "ml-2.5 truncate",
                                faker.opened && "font-medium",
                              ])}
                            >
                              {faker.sender.name}
                            </div>
                          </div>
                          <div className="max-w-2xl truncate">
                            <span
                              className={clsx([faker.opened && "font-medium"])}
                            >
                              {faker.subject}
                            </span>{" "}
                            <span className="mx-0.5">-</span> {faker.content}
                          </div>
                          <div className="pl-10 ml-auto text-xs whitespace-nowrap text-slate-500/70 dark:text-slate-400">
                            {faker.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center p-5 text-center sm:flex-row sm:text-left text-slate-500/80 dark:text-slate-400">
                <div>4.41 GB (25%) of 17 GB used Manage</div>
                <div className="mt-2 sm:ml-auto sm:mt-0">
                  Last account activity: 36 minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
