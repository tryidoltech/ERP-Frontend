import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import { FormCheck, FormInput, FormSelect } from "@/components/Base/Form";
import FileIcon from "@/components/Base/FileIcon";
import TomSelect from "@/components/Base/TomSelect";
import Tippy from "@/components/Base/Tippy";
import files from "@/fakers/files";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import { useState } from "react";
import _ from "lodash";

function Main() {
  const [selectedUser, setSelectedUser] = useState("1");

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            File Manager
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
            >
              <Lucide icon="MailPlus" className="stroke-[1.3] w-4 h-4 mr-2" />{" "}
              Upload New Files
            </Button>
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
            >
              <Lucide icon="Cog" className="stroke-[1.3] w-4 h-4 mr-2" /> File
              Manager Settings
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
          <div className="flex flex-col w-full box box--stacked">
            <div className="flex flex-col p-5 mb-1 sm:items-center sm:flex-row gap-y-2">
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
                              Uploader
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
                              File Type
                            </div>
                            <FormSelect className="flex-1 mt-2">
                              <option value="Document">Document</option>
                              <option value="Music">Music</option>
                              <option value="Video">Video</option>
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
            <div className="flex flex-col gap-6 px-5">
              <div>
                <div className="h-4 mt-1 mb-5 text-xs uppercase text-slate-500/60 relative before:content-[''] before:h-px before:bg-slate-200/70 before:w-full before:absolute before:inset-y-0 before:my-auto dark:text-slate-400 dark:before:bg-darkmode-300">
                  <span className="flex items-center absolute px-2.5 ml-4 bg-white dark:bg-darkmode-600">
                    <Lucide
                      icon="Clock"
                      className="w-[15px] h-[15px] stroke-[1.7] stroke-slate-400/70 mr-1.5"
                    />
                    Recently Updated Files
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 sm:gap-3.5">
                  {_.take(files.fakeFiles(), 6).map((faker, fakerKey) => (
                    <div
                      key={fakerKey}
                      className="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
                    >
                      <div className="relative px-3 pt-8 pb-5 rounded-[0.6rem] border border-slate-200/80 hover:bg-slate-50 cursor-pointer transition sm:px-5 shadow-sm dark:hover:bg-darkmode-400">
                        <div className="absolute top-0 left-0 mt-3 ml-3">
                          <FormCheck.Input
                            className="border"
                            type="checkbox"
                            checked={_.random(0, 1) ? true : false}
                            onChange={() => {}}
                          />
                        </div>
                        {(() => {
                          if (faker.type == "Empty Folder")
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto"
                                variant="empty-directory"
                              />
                            );
                          else if (faker.type == "Folder")
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto"
                                variant="directory"
                              />
                            );
                          else if (faker.type == "Image")
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto"
                                variant="image"
                                src={faker["fileName"]}
                              />
                            );
                          else
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto text-xs"
                                variant="file"
                                type={faker.type}
                              />
                            );
                        })()}
                        <a
                          href=""
                          className="block mt-4 font-medium text-center capitalize truncate"
                        >
                          {
                            faker.fileName.split("/")[
                              faker.fileName.split("/").length - 1
                            ]
                          }
                        </a>
                        <div className="mt-1 text-xs text-center text-slate-500">
                          {faker.size}
                        </div>
                        <Menu className="absolute top-0 right-0 mt-3 ml-auto mr-2">
                          <Menu.Button
                            as="a"
                            className="block w-5 h-5"
                            href="#"
                          >
                            <Lucide
                              icon="MoreVertical"
                              className="w-5 h-5 stroke-[1] stroke-slate-400/70 fill-slate-400/70"
                            />
                          </Menu.Button>
                          <Menu.Items className="w-40">
                            <Menu.Item>
                              <Lucide icon="Users" className="w-4 h-4 mr-2" />{" "}
                              Share File
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                              Delete
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="h-4 mt-1 mb-5 text-xs uppercase text-slate-500/60 relative before:content-[''] before:h-px before:bg-slate-200/70 before:w-full before:absolute before:inset-y-0 before:my-auto dark:text-slate-400 dark:before:bg-darkmode-300">
                  <span className="flex items-center absolute px-2.5 ml-4 bg-white dark:bg-darkmode-600">
                    <Lucide
                      icon="Pin"
                      className="w-[15px] h-[15px] stroke-[1.7] stroke-slate-400/70 mr-1.5"
                    />
                    Pinned Files
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 sm:gap-3.5">
                  {_.take(files.fakeFiles(), 3).map((faker, fakerKey) => (
                    <div
                      key={fakerKey}
                      className="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
                    >
                      <div className="relative px-3 pt-8 pb-5 rounded-[0.6rem] border border-slate-200/80 hover:bg-slate-50 cursor-pointer transition sm:px-5 shadow-sm dark:hover:bg-darkmode-400">
                        <div className="absolute top-0 left-0 mt-3 ml-3">
                          <FormCheck.Input
                            className="border"
                            type="checkbox"
                            checked={_.random(0, 1) ? true : false}
                            onChange={() => {}}
                          />
                        </div>
                        {(() => {
                          if (faker.type == "Empty Folder")
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto"
                                variant="empty-directory"
                              />
                            );
                          else if (faker.type == "Folder")
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto"
                                variant="directory"
                              />
                            );
                          else if (faker.type == "Image")
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto"
                                variant="image"
                                src={faker["fileName"]}
                              />
                            );
                          else
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto text-xs"
                                variant="file"
                                type={faker.type}
                              />
                            );
                        })()}
                        <a
                          href=""
                          className="block mt-4 font-medium text-center capitalize truncate"
                        >
                          {
                            faker.fileName.split("/")[
                              faker.fileName.split("/").length - 1
                            ]
                          }
                        </a>
                        <div className="mt-1 text-xs text-center text-slate-500">
                          {faker.size}
                        </div>
                        <Menu className="absolute top-0 right-0 mt-3 ml-auto mr-2">
                          <Menu.Button
                            as="a"
                            className="block w-5 h-5"
                            href="#"
                          >
                            <Lucide
                              icon="MoreVertical"
                              className="w-5 h-5 stroke-[1] stroke-slate-400/70 fill-slate-400/70"
                            />
                          </Menu.Button>
                          <Menu.Items className="w-40">
                            <Menu.Item>
                              <Lucide icon="Users" className="w-4 h-4 mr-2" />{" "}
                              Share File
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                              Delete
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="h-4 mt-1 mb-5 text-xs uppercase text-slate-500/60 relative before:content-[''] before:h-px before:bg-slate-200/70 before:w-full before:absolute before:inset-y-0 before:my-auto dark:text-slate-400 dark:before:bg-darkmode-300">
                  <span className="flex items-center absolute px-2.5 ml-4 bg-white dark:bg-darkmode-600">
                    <Lucide
                      icon="Trash2"
                      className="w-[15px] h-[15px] stroke-[1.7] stroke-slate-400/70 mr-1.5"
                    />
                    Deleted Files
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-3 sm:gap-3.5">
                  {_.take(files.fakeFiles(), 10).map((faker, fakerKey) => (
                    <div
                      key={fakerKey}
                      className="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
                    >
                      <div className="relative px-3 pt-8 pb-5 rounded-[0.6rem] border border-slate-200/80 hover:bg-slate-50 cursor-pointer transition sm:px-5 shadow-sm dark:hover:bg-darkmode-400">
                        <div className="absolute top-0 left-0 mt-3 ml-3">
                          <FormCheck.Input
                            className="border"
                            type="checkbox"
                            checked={_.random(0, 1) ? true : false}
                            onChange={() => {}}
                          />
                        </div>
                        {(() => {
                          if (faker.type == "Empty Folder")
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto"
                                variant="empty-directory"
                              />
                            );
                          else if (faker.type == "Folder")
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto"
                                variant="directory"
                              />
                            );
                          else if (faker.type == "Image")
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto"
                                variant="image"
                                src={faker["fileName"]}
                              />
                            );
                          else
                            return (
                              <FileIcon
                                className="w-2/4 mx-auto text-xs"
                                variant="file"
                                type={faker.type}
                              />
                            );
                        })()}
                        <a
                          href=""
                          className="block mt-4 font-medium text-center capitalize truncate"
                        >
                          {
                            faker.fileName.split("/")[
                              faker.fileName.split("/").length - 1
                            ]
                          }
                        </a>
                        <div className="mt-1 text-xs text-center text-slate-500">
                          {faker.size}
                        </div>
                        <Menu className="absolute top-0 right-0 mt-3 ml-auto mr-2">
                          <Menu.Button
                            as="a"
                            className="block w-5 h-5"
                            href="#"
                          >
                            <Lucide
                              icon="MoreVertical"
                              className="w-5 h-5 stroke-[1] stroke-slate-400/70 fill-slate-400/70"
                            />
                          </Menu.Button>
                          <Menu.Items className="w-40">
                            <Menu.Item>
                              <Lucide icon="Users" className="w-4 h-4 mr-2" />{" "}
                              Share File
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                              Delete
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center p-5 my-1 text-center sm:flex-row sm:text-left text-slate-500/80 dark:text-slate-400">
              <div>4.41 GB (25%) of 17 GB used Manage</div>
              <div className="mt-2 sm:ml-auto sm:mt-0">
                Last account activity: 36 minutes ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
