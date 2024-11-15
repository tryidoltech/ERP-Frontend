import Lucide from "@/components/Base/Lucide";
import Tippy from "@/components/Base/Tippy";
import products from "@/fakers/products";
import categories from "@/fakers/categories";
import Button from "@/components/Base/Button";
import { formatCurrency } from "@/utils/helper";
import _ from "lodash";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Point of Sale
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
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-11 gap-5 2xl:grid-cols-10">
            <div className="flex flex-col col-span-12 lg:col-span-7 gap-7">
              <div className="flex flex-col p-4 box box--stacked">
                <div className="flex items-center border border-dashed rounded-[0.6rem] px-6 py-5">
                  <div>
                    <a
                      href=""
                      className="flex items-center justify-center w-10 h-10 border rounded-full border-slate-300/70"
                    >
                      <Lucide
                        icon="ArrowLeft"
                        className="stroke-[1.3] w-4 h-4"
                      />
                    </a>
                  </div>
                  <div className="flex items-center ml-5 sm:ml-7">
                    <div className="mx-auto w-[54px] h-[54px] image-fit hidden sm:block flex-none">
                      <img
                        alt="Tailwise - Admin Dashboard Template"
                        className="rounded-full"
                        src={products.fakeProducts()[0].images[0].path}
                      />
                    </div>
                    <div className="sm:ml-4">
                      <div className="-mt-0.5 text-lg font-medium">
                        {products.fakeProducts()[0].name}
                      </div>
                      <div className="mt-0.5 leading-relaxed text-slate-500">
                        Savor simplicity: explore, customize, and order!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-5 box box--stacked">
                <nav className="-mt-0.5 flex flex-1" aria-label="breadcrumb">
                  <ol className="flex items-center text-theme-1 dark:text-slate-300">
                    <li className="">
                      <a href="/">Main Menu</a>
                    </li>
                    <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-black">
                      <a href="/">Foods</a>
                    </li>
                    <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-black text-slate-600 cursor-text dark:text-slate-400">
                      <a href="/">{categories.fakeCategories()[0].name}</a>
                    </li>
                  </ol>
                </nav>
                <div className="grid grid-cols-12 rounded-[0.6rem] border-dashed border shadow-sm overflow-hidden mt-4">
                  {_.take(products.fakeProducts(), 16).map(
                    (faker, fakerKey) => (
                      <div
                        key={fakerKey}
                        className="col-span-6 sm:col-span-4 2xl:col-span-3 border-dashed [&:nth-child(4n)]:border-r-0 px-5 pb-5 pt-6 border-r border-b text-center flex flex-col -mb-px"
                      >
                        <div className="w-20 h-20 mx-auto image-fit">
                          <img
                            alt="Tailwise - Admin Dashboard Template"
                            className="rounded-md"
                            src={faker.images[0].path}
                          />
                        </div>
                        <div className="mt-5 font-medium text-[0.94rem] truncate">
                          {faker.name}
                        </div>
                        <div className="mt-1.5 text-slate-500">
                          ${formatCurrency(faker.price)}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="relative col-span-12 lg:col-span-4 2xl:col-span-3">
              <div className="sticky top-[104px]">
                <div className="flex flex-col p-5 box box--stacked">
                  <div>
                    <div className="text-lg font-medium">My Orders</div>
                    <div className="mt-1 text-slate-500">4 Selected Items</div>
                  </div>
                  <div className="flex flex-col gap-3 my-6">
                    {_.take(products.fakeProducts(), 4).map(
                      (faker, fakerKey) => (
                        <div
                          key={fakerKey}
                          className="relative flex items-center p-4 border border-dashed rounded-lg border-slate-300/70"
                        >
                          <div className="flex-none w-14 h-14 image-fit">
                            <img
                              alt="Tailwise - Admin Dashboard Template"
                              className="rounded-md"
                              src={faker.images[0].path}
                            />
                          </div>
                          <div className="ml-5">
                            <div className="font-medium text-[0.94rem] truncate w-36">
                              {faker.name}
                            </div>
                            <div className="mt-1.5 font-medium text-slate-500">
                              {_.random(1, 10)} x ${formatCurrency(faker.price)}
                            </div>
                          </div>
                          <a
                            href=""
                            className="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-5 text-slate-400"
                          >
                            <Lucide
                              icon="PencilLine"
                              className="stroke-[1.3] w-5 h-5"
                            />{" "}
                          </a>
                        </div>
                      )
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <div className="mr-auto text-slate-500">Subtotal:</div>
                      <div className="font-medium text-slate-600 dark:text-slate-400">
                        ${formatCurrency(_.random(21000, 35000))}
                      </div>
                    </div>
                    <div className="flex items-center mt-3.5">
                      <div className="mr-auto text-slate-500">Tax:</div>
                      <div className="font-medium text-slate-600 dark:text-slate-400">
                        ${formatCurrency(_.random(200, 500))}
                      </div>
                    </div>
                    <div className="flex items-center pt-3 mt-3 border-t border-dashed">
                      <div className="mr-auto font-medium">Total:</div>
                      <div className="font-medium">
                        ${formatCurrency(_.random(41000, 55000))}
                      </div>
                    </div>
                  </div>
                  <Button variant="primary" className="h-10 mt-8">
                    <Lucide
                      icon="Printer"
                      className="stroke-[1.3] w-4 h-4 mr-2"
                    />{" "}
                    Print Bills
                  </Button>
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
