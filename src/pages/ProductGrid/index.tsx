import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import products from "@/fakers/products";
import reviews from "@/fakers/reviews";
import Button from "@/components/Base/Button";
import _ from "lodash";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Products
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
            >
              <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" />{" "}
              Add New Product
            </Button>
          </div>
        </div>
        <div className="mt-3.5">
          <div className="flex flex-col box box--stacked">
            <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
              <div>
                <div className="relative">
                  <Lucide
                    icon="Search"
                    className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                  />
                  <FormInput
                    type="text"
                    placeholder="Search products..."
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
            <div className="overflow-hidden">
              <div className="grid grid-cols-12 px-5 -mx-5 border-dashed border-y">
                {_.take(products.fakeProducts(), 8).map((faker, fakerKey) => (
                  <div
                    key={fakerKey}
                    className="col-span-12 sm:col-span-6 xl:col-span-3 border-dashed border-slate-300/80 [&:nth-child(4n)]:border-r-0 px-5 py-5 [&:nth-last-child(-n+4)]:border-b-0 border-r border-b flex flex-col"
                  >
                    <div className="overflow-hidden rounded-lg h-52 image-fit before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-slate-900/90 before:to-black/20">
                      <img
                        alt="Tailwise - Admin Dashboard Template"
                        className="rounded-md"
                        src={faker.images[0].path}
                      />
                      {faker.isActive ? (
                        <span className="absolute top-0 z-10 px-2.5 py-1 m-5 text-xs text-white rounded-lg bg-success/80 font-medium border-white/20 border">
                          Active
                        </span>
                      ) : (
                        <span className="absolute top-0 z-10 px-2.5 py-1 m-5 text-xs text-white rounded-lg bg-pending/80 font-medium border-white/20 border">
                          Inactive
                        </span>
                      )}
                      <div className="absolute bottom-0 z-10 w-full px-5 pb-6 text-white">
                        <a
                          href=""
                          className="block text-lg font-medium truncate"
                        >
                          {faker.name}
                        </a>
                        <span className="mt-3 text-xs text-white/80">
                          {faker.category.name}
                        </span>
                      </div>
                    </div>
                    <div className="pt-5">
                      <div className="flex flex-col gap-3.5 mb-5 pb-5 mt-auto border-b border-dashed border-slate-300/70">
                        <div className="flex items-center">
                          <div className="text-slate-500">Category:</div>
                          <div className="ml-auto">
                            <div className="flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px">
                              <span className="-mt-px">
                                {faker.category.name}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-slate-500">Rated:</div>
                          <div className="ml-auto">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <Lucide
                                  icon="Star"
                                  className="w-4 h-4 mr-1 text-pending fill-pending/30"
                                />
                                <Lucide
                                  icon="Star"
                                  className="w-4 h-4 mr-1 text-pending fill-pending/30"
                                />
                                <Lucide
                                  icon="Star"
                                  className="w-4 h-4 mr-1 text-pending fill-pending/30"
                                />
                                <Lucide
                                  icon="Star"
                                  className="w-4 h-4 mr-1 text-pending fill-pending/30"
                                />
                                <Lucide
                                  icon="Star"
                                  className="w-4 h-4 mr-1 text-slate-400 fill-slate/30"
                                />
                              </div>
                              <div className="ml-1 text-xs text-slate-500">
                                (4.5+)
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-slate-500">Reviews:</div>
                          <div className="ml-auto">
                            <div className="flex justify-center">
                              <div className="w-6 h-6 image-fit zoom-in">
                                <Tippy
                                  as="img"
                                  alt="Tailwise - Admin Dashboard Template"
                                  className="border-2 border-white rounded-full"
                                  src={reviews.fakeReviews()[0].user.photo}
                                  content={`${
                                    reviews.fakeReviews()[0].comment
                                  }`}
                                />
                              </div>
                              <div className="w-6 h-6 -ml-2 image-fit zoom-in">
                                <Tippy
                                  as="img"
                                  alt="Tailwise - Admin Dashboard Template"
                                  className="border-2 border-white rounded-full"
                                  src={reviews.fakeReviews()[0].user.photo}
                                  content={`${
                                    reviews.fakeReviews()[0].comment
                                  }`}
                                />
                              </div>
                              <div className="w-6 h-6 -ml-2 image-fit zoom-in">
                                <Tippy
                                  as="img"
                                  alt="Tailwise - Admin Dashboard Template"
                                  className="border-2 border-white rounded-full"
                                  src={reviews.fakeReviews()[0].user.photo}
                                  content={`${
                                    reviews.fakeReviews()[0].comment
                                  }`}
                                />
                              </div>
                              <div className="w-6 h-6 -ml-2 image-fit zoom-in">
                                <Tippy
                                  as="img"
                                  alt="Tailwise - Admin Dashboard Template"
                                  className="border-2 border-white rounded-full"
                                  src={reviews.fakeReviews()[0].user.photo}
                                  content={`${
                                    reviews.fakeReviews()[0].comment
                                  }`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <a
                          className="flex items-center mr-auto text-primary"
                          href="#"
                        >
                          <Lucide
                            icon="KanbanSquare"
                            className="w-4 h-4 stroke-[1.3] mr-1.5"
                          />{" "}
                          Preview
                        </a>
                        <a className="flex items-center mr-3" href="#">
                          <Lucide
                            icon="CheckSquare"
                            className="w-4 h-4 stroke-[1.3] mr-1.5"
                          />{" "}
                          Edit
                        </a>
                        <a className="flex items-center text-danger" href="#">
                          <Lucide
                            icon="Trash2"
                            className="w-4 h-4 stroke-[1.3] mr-1.5"
                          />{" "}
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col-reverse flex-wrap items-center p-5 flex-reverse gap-y-2 sm:flex-row">
              <Pagination className="flex-1 w-full mr-auto sm:w-auto">
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
              <FormSelect className="sm:w-20 rounded-[0.5rem]">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </FormSelect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
