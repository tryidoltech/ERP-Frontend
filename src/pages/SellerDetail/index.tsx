import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import products from "@/fakers/products";
import transactions from "@/fakers/transactions";
import Button from "@/components/Base/Button";
import { formatCurrency } from "@/utils/helper";
import Table from "@/components/Base/Table";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col lg:h-10 gap-y-3 lg:items-center lg:flex-row">
          <div className="text-lg font-medium group-[.mode--light]:text-white flex items-center">
            Sellers
            <Lucide
              icon="ArrowRight"
              className="stroke-[1.3] w-3.5 h-3.5 sm:w-5 sm:h-5 mx-1 sm:mx-2"
            />
            <div className="text-sm sm:text-lg">
              {users.fakeUsers()[0].name} - #{_.random(1000000000, 9000000000)}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 lg:ml-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
            >
              <Lucide
                icon="MailCheck"
                className="stroke-[1.3] w-4 h-4 mr-2.5"
              />
              Send Message
            </Button>
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
            >
              <Lucide icon="XCircle" className="stroke-[1.3] w-4 h-4 mr-2.5" />{" "}
              Block User
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-5 mt-3.5">
          <div className="col-span-12 xl:col-span-3">
            <div className="flex flex-col p-5 box box--stacked">
              <div className="flex flex-col gap-5">
                <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                  <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">User Details</div>
                  </div>
                  <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Name:</div>
                        <a
                          href=""
                          className="underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                        >
                          {users.fakeUsers()[0].name}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Phone Number:</div>
                        {users.fakeUsers()[0].phone}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Inbox"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Email:</div>
                        <div className="text-right truncate w-52">
                          {users.fakeUsers()[0].email}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Map"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Location:</div>
                        {users.fakeUsers()[0].location}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Address:</div>
                        <a
                          href=""
                          className="flex items-center underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                        >
                          <Lucide
                            icon="MapPin"
                            className="w-3.5 h-3.5 mr-1.5"
                          />
                          View Address
                        </a>
                      </div>
                    </div>
                    <div className="mt-1.5">
                      <Button className="w-full border-primary/20 text-primary/80 hover:bg-slate-50">
                        <Lucide
                          icon="PenSquare"
                          className="stroke-[1.3] w-4 h-4 mr-2"
                        />{" "}
                        Change Status
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                  <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Store Details</div>
                  </div>
                  <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Unique ID:</div>
                        STR-{_.random(1000000000, 9000000000)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Name:</div>
                        Themeforest
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Phone Number:</div>
                        {users.fakeUsers()[0].phone}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Address:</div>
                        <a
                          href=""
                          className="flex items-center underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                        >
                          <Lucide
                            icon="MapPin"
                            className="w-3.5 h-3.5 mr-1.5"
                          />
                          View Address
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Status:</div>
                        <div className="flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px mr-auto sm:mr-0">
                          <span className="-mt-px">Active</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1.5">
                      <Button className="w-full border-primary/20 text-primary/80 hover:bg-slate-50">
                        <Lucide
                          icon="PenSquare"
                          className="stroke-[1.3] w-4 h-4 mr-2"
                        />{" "}
                        Change Status
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                  <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Transaction Reports</div>
                  </div>
                  <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Daily Average:</div>$
                        {formatCurrency(_.random(10000000, 90000000))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Monthly Average:</div>$
                        {formatCurrency(_.random(10000000, 90000000))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Annually Average:</div>
                        ${formatCurrency(_.random(10000000, 90000000))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Rating Average:</div>(
                        {_.random(3, 4)}.{_.random(1, 5)}+)
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Total Products:</div>
                        {_.random(1000, 10000)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">
                          Total Transactions:
                        </div>
                        {formatCurrency(_.random(10000000, 90000000))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Active Disputes:</div>
                        {_.random(20, 100)}
                      </div>
                    </div>
                    <div className="mt-1.5">
                      <Button className="w-full border-primary/20 text-primary/80 hover:bg-slate-50">
                        <Lucide
                          icon="PenSquare"
                          className="stroke-[1.3] w-4 h-4 mr-2"
                        />{" "}
                        More Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 xl:col-span-7 gap-7">
            <div className="flex flex-col p-5 box box--stacked">
              <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                  <div className="-mt-px">Products</div>
                </div>
                <div className="p-5 mt-2.5 flex flex-col gap-5">
                  <div className="flex flex-col sm:items-center sm:flex-row gap-y-2">
                    <div>
                      <div className="relative">
                        <Lucide
                          icon="Search"
                          className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                        />
                        <FormInput
                          type="text"
                          placeholder="Search products..."
                          className="pl-9 sm:w-64 rounded-[0.5rem] shadow-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 sm:ml-auto">
                      <div className="relative">
                        <Lucide
                          icon="PieChart"
                          className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
                        />
                        <FormSelect className="shadow-none pl-9 rounded-[0.5rem]">
                          <option value="custom-date">Active</option>
                          <option value="daily">Inactive</option>
                        </FormSelect>
                      </div>
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
                                    Status
                                  </div>
                                  <FormSelect className="flex-1 mt-2">
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                  </FormSelect>
                                </div>
                                <div className="mt-3">
                                  <div className="text-left text-slate-500">
                                    Stock
                                  </div>
                                  <FormSelect className="flex-1 mt-2">
                                    <option value="1 - 50">1 - 50</option>
                                    <option value="51 - 100">50 - 100</option>
                                    <option value="> 100">&gt; 100</option>
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
                                  <Button
                                    variant="primary"
                                    className="w-32 ml-2"
                                  >
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
                  <div className="overflow-auto xl:overflow-visible">
                    <Table className="border-b border-dashed border-slate-200/80">
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium bg-slate-50 border-slate-200/80 text-slate-500 border-y dark:bg-darkmode-400">
                              Item
                            </div>
                          </Table.Td>
                          <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium text-right bg-slate-50 border-slate-200/80 text-slate-500 border-y dark:bg-darkmode-400">
                              Price
                            </div>
                          </Table.Td>
                          <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium text-center bg-slate-50 border-slate-200/80 text-slate-500 border-y dark:bg-darkmode-400">
                              Status
                            </div>
                          </Table.Td>
                          <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium text-center bg-slate-50 border-slate-200/80 text-slate-500 border-y dark:bg-darkmode-400">
                              Action
                            </div>
                          </Table.Td>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        {_.take(products.fakeProducts(), 10).map(
                          (faker, fakerKey) => (
                            <Table.Tr
                              key={fakerKey}
                              className="[&_td]:last:border-b-0 [&_td]:first:pt-5"
                            >
                              <Table.Td className="py-3.5 border-dashed dark:bg-darkmode-600">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 image-fit zoom-in">
                                    <Tippy
                                      as="img"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                      src={faker.images[0].path}
                                      content={`Uploaded at ${faker.images[0].uploadDate}`}
                                    />
                                  </div>
                                  <div className="ml-5">
                                    <a
                                      href=""
                                      className="font-medium whitespace-nowrap"
                                    >
                                      {faker.name}
                                    </a>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                                      Tags: {faker.category.tags.join(", ")}
                                    </div>
                                  </div>
                                </div>
                              </Table.Td>
                              <Table.Td className="py-4 text-right border-dashed dark:bg-darkmode-600">
                                <div className="whitespace-nowrap">
                                  ${formatCurrency(Math.floor(faker.price))}
                                </div>
                              </Table.Td>
                              <Table.Td className="py-4 text-right border-dashed dark:bg-darkmode-600">
                                <div
                                  className={clsx([
                                    "flex items-center justify-center",
                                    { "text-success": faker.isActive },
                                    { "text-danger": !faker.isActive },
                                  ])}
                                >
                                  <Lucide
                                    icon="Database"
                                    className="w-3.5 h-3.5 stroke-[1.7]"
                                  />
                                  <div className="ml-1.5 whitespace-nowrap">
                                    {faker.isActive ? "Active" : "Inactive"}
                                  </div>
                                </div>
                              </Table.Td>
                              <Table.Td className="py-4 text-center border-dashed dark:bg-darkmode-600">
                                <Menu className="h-5">
                                  <Menu.Button className="w-5 h-5 text-slate-500">
                                    <Lucide
                                      icon="MoreVertical"
                                      className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                                    />
                                  </Menu.Button>
                                  <Menu.Items className="w-40">
                                    <Menu.Item>
                                      <Lucide
                                        icon="CheckSquare"
                                        className="w-4 h-4 mr-2"
                                      />{" "}
                                      Edit
                                    </Menu.Item>
                                    <Menu.Item className="text-danger">
                                      <Lucide
                                        icon="Trash2"
                                        className="w-4 h-4 mr-2"
                                      />
                                      Delete
                                    </Menu.Item>
                                  </Menu.Items>
                                </Menu>
                              </Table.Td>
                            </Table.Tr>
                          )
                        )}
                      </Table.Tbody>
                    </Table>
                  </div>
                  <div className="flex flex-col-reverse flex-wrap items-center flex-reverse gap-y-2 sm:flex-row">
                    <Pagination className="flex-1 w-full mr-auto sm:w-auto [&_a]:shadow-none">
                      <Pagination.Link>
                        <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                      </Pagination.Link>
                      <Pagination.Link>
                        <Lucide icon="ChevronLeft" className="w-4 h-4" />
                      </Pagination.Link>
                      <Pagination.Link>...</Pagination.Link>
                      <Pagination.Link>1</Pagination.Link>
                      <Pagination.Link active>2</Pagination.Link>
                      <Pagination.Link>3</Pagination.Link>
                      <Pagination.Link>...</Pagination.Link>
                      <Pagination.Link>
                        <Lucide icon="ChevronRight" className="w-4 h-4" />
                      </Pagination.Link>
                      <Pagination.Link>
                        <Lucide icon="ChevronsRight" className="w-4 h-4" />
                      </Pagination.Link>
                    </Pagination>
                    <FormSelect className="sm:w-20 rounded-[0.5rem] shadow-none">
                      <option>10</option>
                      <option>25</option>
                      <option>35</option>
                      <option>50</option>
                    </FormSelect>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                  <div className="-mt-px">Latest Transactions</div>
                </div>
                <div className="p-5 mt-2.5 flex flex-col gap-5">
                  <div className="overflow-auto xl:overflow-visible">
                    <Table className="border-b border-dashed border-slate-200/80">
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium bg-slate-50 border-slate-200/80 text-slate-500 border-y dark:bg-darkmode-400">
                              Reference
                            </div>
                          </Table.Td>
                          <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium bg-slate-50 border-slate-200/80 text-slate-500 border-y dark:bg-darkmode-400">
                              Status
                            </div>
                          </Table.Td>
                          <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium text-right bg-slate-50 border-slate-200/80 text-slate-500 border-y dark:bg-darkmode-400">
                              Amount
                            </div>
                          </Table.Td>
                          <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium text-center bg-slate-50 border-slate-200/80 text-slate-500 border-y dark:bg-darkmode-400">
                              Action
                            </div>
                          </Table.Td>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        {_.take(transactions.fakeTransactions(), 5).map(
                          (faker, fakerKey) => (
                            <Table.Tr
                              key={fakerKey}
                              className="[&_td]:last:border-b-0"
                            >
                              <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                <div className="whitespace-nowrap">
                                  {faker.orderId}
                                </div>
                              </Table.Td>
                              <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                <div
                                  className={clsx([
                                    "flex items-center",
                                    faker.orderStatus.textColor,
                                  ])}
                                >
                                  <Lucide
                                    icon={faker.orderStatus.icon}
                                    className="w-3.5 h-3.5 stroke-[1.7]"
                                  />
                                  <div className="ml-1.5 whitespace-nowrap">
                                    {faker.orderStatus.name}
                                  </div>
                                </div>
                              </Table.Td>
                              <Table.Td className="py-4 text-right border-dashed dark:bg-darkmode-600">
                                <div className="whitespace-nowrap">
                                  ${faker.amount}
                                </div>
                              </Table.Td>
                              <Table.Td className="py-4 text-center border-dashed dark:bg-darkmode-600">
                                <a
                                  className="flex items-center justify-center text-primary whitespace-nowrap"
                                  href=""
                                >
                                  <Lucide
                                    icon="Eye"
                                    className="w-4 h-4 mr-1.5 stroke-[1.3]"
                                  />
                                  Quick View
                                </a>
                              </Table.Td>
                            </Table.Tr>
                          )
                        )}
                      </Table.Tbody>
                    </Table>
                  </div>
                  <div className="mt-2">
                    <Button
                      variant="primary"
                      className="w-full bg-white text-primary border-primary/20 hover:bg-primary/20 dark:bg-darkmode-400"
                    >
                      View all transactions
                      <Lucide
                        icon="ArrowRight"
                        className="stroke-[1.3] w-4 h-4 ml-2"
                      />
                    </Button>
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

export default Main;
