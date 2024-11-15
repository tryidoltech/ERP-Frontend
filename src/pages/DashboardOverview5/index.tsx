import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import ReportBarChart3 from "@/components/ReportBarChart3";
import ReportBarChart4 from "@/components/ReportBarChart4";
import { FormSelect, FormInput } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import _ from "lodash";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12 2xl:col-span-3">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-12 lg:col-span-4 2xl:col-span-12">
            <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
              <div className="text-base font-medium group-[.mode--light]:text-white">
                Current Balance
              </div>
            </div>
            <div className="p-5 mt-3.5 box box--stacked">
              <Menu className="absolute top-0 right-0 mt-5 mr-5">
                <Menu.Button className="w-5 h-5 text-slate-500">
                  <Lucide
                    icon="MoreVertical"
                    className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                  />
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>
                    <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                    Delete
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
                <Lucide icon="Box" className="w-6 h-6 text-info fill-info/10" />
              </div>
              <div className="mt-8 mb-6 lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                <div className="text-base text-slate-500">Available</div>
                <div className="flex items-center mt-1 text-2xl font-medium">
                  <span className="text-[1.3rem]">$</span>
                  <span className="ml-px mr-1.5">435,220,00</span>
                  <span className="text-base mt-0.5">USD</span>
                </div>
              </div>
              <a className="flex items-center font-medium text-primary" href="">
                Setup auto transfers
                <Lucide icon="MoveRight" className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-12">
            <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
              <div className="text-base font-medium lg:group-[.mode--light]:text-white 2xl:group-[.mode--light]:text-current">
                Money In
              </div>
            </div>
            <div className="p-5 mt-3.5 box box--stacked">
              <Menu className="absolute top-0 right-0 mt-5 mr-5">
                <Menu.Button className="w-5 h-5 text-slate-500">
                  <Lucide
                    icon="MoreVertical"
                    className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                  />
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>
                    <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                    Delete
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              <div className="pb-5 mb-5 border-b border-dashed border-slate-300/70">
                <div className="text-base text-slate-500">Total received</div>
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-xl font-medium">
                    <span className="mr-px">$</span>2,176,221
                    <span className="ml-1.5 text-sm">USD</span>
                  </div>
                </div>
              </div>
              <ReportBarChart3 className="relative z-10 -ml-1" height={80} />
              <a
                className="flex items-center mt-6 font-medium text-primary"
                href=""
              >
                Request Money
                <Lucide icon="MoveRight" className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-12">
            <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
              <div className="text-base font-medium lg:group-[.mode--light]:text-white 2xl:group-[.mode--light]:text-current">
                Money Out
              </div>
            </div>
            <div className="p-5 mt-3.5 box box--stacked">
              <Menu className="absolute top-0 right-0 mt-5 mr-5">
                <Menu.Button className="w-5 h-5 text-slate-500">
                  <Lucide
                    icon="MoreVertical"
                    className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                  />
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>
                    <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                    Delete
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              <div className="pb-5 mb-5 border-b border-dashed border-slate-300/70">
                <div className="text-base text-slate-500">
                  Total sent or spent
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-xl font-medium">
                    <span className="mr-px">$</span>4,176,132
                    <span className="ml-1.5 text-sm">USD</span>
                  </div>
                </div>
              </div>
              <ReportBarChart4 className="relative z-10 -ml-1" height={80} />
              <a
                className="flex items-center mt-6 font-medium text-primary"
                href=""
              >
                Send Money
                <Lucide icon="MoveRight" className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 2xl:col-span-9 gap-y-10">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium 2xl:group-[.mode--light]:text-white">
              Quick Links
            </div>
          </div>
          <div className="mt-3.5 box box--stacked">
            <div className="grid grid-cols-2 px-5 py-10 border-b sm:grid-cols-3 md:grid-cols-5 gap-y-5 lg:grid-cols-7">
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                  <Lucide
                    icon="CreditCard"
                    className="w-6 h-6 text-primary fill-primary/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">Business Tools</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
                  <Lucide
                    icon="WalletCards"
                    className="w-6 h-6 text-info fill-info/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">Invoicing</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
                  <Lucide
                    icon="Airplay"
                    className="w-6 h-6 text-info fill-info/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">Request Money</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-success/10 bg-success/10">
                  <Lucide
                    icon="Banknote"
                    className="w-6 h-6 text-success fill-success/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">Send Money</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-pending/10 bg-pending/10">
                  <Lucide
                    icon="Users"
                    className="w-6 h-6 text-pending fill-pending/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">Share Profile</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                  <Lucide
                    icon="ShoppingBag"
                    className="w-6 h-6 text-primary fill-primary/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">Checkout</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-warning/10 bg-warning/10">
                  <Lucide
                    icon="CircleDollarSign"
                    className="w-6 h-6 text-warning fill-warning/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">Accept Payments</div>
              </a>
            </div>
            <div className="flex flex-col items-center gap-5 px-6 pt-5 pb-6 rounded-b-lg md:flex-row bg-slate-50 dark:bg-darkmode-700">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
                <Lucide icon="Box" className="w-6 h-6 text-info fill-info/10" />
              </div>
              <div className="text-center md:text-left">
                <div className="mt-1 text-lg font-medium">Invoicing</div>
                <div className="mt-1 leading-relaxed text-slate-600 dark:text-slate-500">
                  Send an invoice or estimate in minutes. Customers can pay with
                  cards or Tailwise.
                </div>
              </div>
              <div className="flex flex-col w-full gap-3 sm:w-auto sm:flex-row md:ml-auto">
                <Button as="a" rounded className="w-full sm:w-36" href="">
                  Not Now
                </Button>
                <Button
                  as="a"
                  variant="outline-primary"
                  rounded
                  className="w-full sm:w-36 border-primary/50"
                  href=""
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
          <div className="flex flex-col gap-y-10">
            <div>
              <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                <div className="text-base font-medium">Send Payments</div>
              </div>
              <div className="p-5 mt-3.5 box box--stacked">
                <FormInput
                  type="text"
                  placeholder="Add an email or name"
                  className="py-3"
                />
                <Button
                  variant="outline-primary"
                  rounded
                  className="px-10 mt-6 border-primary/50"
                >
                  Next
                </Button>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                <div className="text-base font-medium">Request Money</div>
              </div>
              <div className="p-5 mt-3.5 box box--stacked">
                <div className="flex">
                  <div className="flex items-center text-2xl">
                    <span className="mr-1.5 -mt-1 text-base font-medium">
                      $
                    </span>{" "}
                    <span
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="outline-none"
                    >
                      0,00
                    </span>{" "}
                    <div className="relative flex items-center ml-2 text-primary">
                      <FormSelect className="p-0 pr-4 text-sm border-0 shadow-none bg-none focus:ring-0 dark:bg-none dark:!bg-transparent">
                        <option value="USD">USD</option>
                        <option value="AUD">AUD</option>
                        <option value="BRL">BRL</option>
                        <option value="CAD">CAD</option>
                        <option value="CHF">CHF</option>
                        <option value="CZK">CZK</option>
                        <option value="DKK">DKK</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="HKD">HKD</option>
                        <option value="HUF">HUF</option>
                        <option value="ILS">ILS</option>
                        <option value="JPY">JPY</option>
                        <option value="MXN">MXN</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="PHP">PHP</option>
                        <option value="PLN">PLN</option>
                        <option value="RUB">RUB</option>
                        <option value="SEK">SEK</option>
                        <option value="SGD">SGD</option>
                        <option value="THB">THB</option>
                        <option value="TWD">TWD</option>
                      </FormSelect>
                      <Lucide
                        icon="ChevronDown"
                        className="absolute right-0 my-auto inset-y-0 stroke-[1.3] w-4 h-4 ml-1"
                      />
                    </div>
                  </div>
                </div>
                <FormInput
                  type="text"
                  placeholder="Add an email or name"
                  className="py-3 mt-5"
                />
                <Button
                  variant="outline-primary"
                  rounded
                  className="px-10 mt-6 border-primary/50"
                >
                  Next
                </Button>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                <div className="text-base font-medium">Issue a Refund</div>
              </div>
              <div className="p-5 mt-3.5 box box--stacked">
                <div className="relative">
                  <Lucide
                    icon="Search"
                    className="absolute inset-y-0 left-0 w-6 h-6 my-auto ml-3 text-slate-400"
                  />
                  <FormInput
                    type="text"
                    placeholder="Transaction id, invoice id or email"
                    className="py-3 pl-11"
                  />
                </div>
                <div className="mt-3 text-slate-500">
                  Find any payment that’s refundable and not related to any open
                  cases. Enter the refund amount and send.
                </div>
                <div className="mt-5 text-slate-500">
                  <a href="" className="font-medium text-primary">
                    Learn more
                  </a>{" "}
                  about refunds
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <div>
              <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                <div className="text-base font-medium">
                  Create a Subscription
                </div>
              </div>
              <div className="p-5 mt-3.5 box box--stacked">
                <FormInput
                  type="text"
                  placeholder="Enter product name"
                  className="py-3"
                />
                <FormInput
                  type="text"
                  placeholder="Enter plan name"
                  className="py-3 mt-3"
                />
                <div className="flex gap-3 mt-3">
                  <FormSelect className="py-3">
                    <option value="USD">USD</option>
                    <option value="AUD">AUD</option>
                    <option value="BRL">BRL</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="HKD">HKD</option>
                    <option value="HUF">HUF</option>
                    <option value="ILS">ILS</option>
                    <option value="JPY">JPY</option>
                    <option value="MXN">MXN</option>
                    <option value="NOK">NOK</option>
                    <option value="NZD">NZD</option>
                    <option value="PHP">PHP</option>
                    <option value="PLN">PLN</option>
                    <option value="RUB">RUB</option>
                    <option value="SEK">SEK</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="TWD">TWD</option>
                  </FormSelect>
                  <FormInput type="text" placeholder="0,00" className="py-3" />
                  <FormSelect className="py-3">
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                  </FormSelect>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button
                    rounded
                    variant="primary"
                    className="px-7 border-primary/50"
                  >
                    Create Now
                  </Button>
                  <Button
                    rounded
                    variant="outline-primary"
                    className="px-7 border-primary/50"
                  >
                    More Options
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                <div className="text-base font-medium">Create an Invoice</div>
              </div>
              <div className="p-5 mt-3.5 box box--stacked">
                <FormInput
                  type="text"
                  placeholder="Customers email's"
                  className="py-3"
                />
                <FormInput
                  type="text"
                  placeholder="Item name"
                  className="py-3 mt-3"
                />
                <div className="flex gap-3 mt-3">
                  <FormInput
                    type="text"
                    placeholder="Item amount"
                    className="py-3"
                  />
                  <FormSelect className="py-3">
                    <option value="USD">USD</option>
                    <option value="AUD">AUD</option>
                    <option value="BRL">BRL</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="HKD">HKD</option>
                    <option value="HUF">HUF</option>
                    <option value="ILS">ILS</option>
                    <option value="JPY">JPY</option>
                    <option value="MXN">MXN</option>
                    <option value="NOK">NOK</option>
                    <option value="NZD">NZD</option>
                    <option value="PHP">PHP</option>
                    <option value="PLN">PLN</option>
                    <option value="RUB">RUB</option>
                    <option value="SEK">SEK</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="TWD">TWD</option>
                  </FormSelect>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button
                    rounded
                    variant="primary"
                    className="px-7 border-primary/50"
                  >
                    Send
                  </Button>
                  <Button
                    as="a"
                    rounded
                    className="px-0 ml-2.5 border-transparent shadow-none text-primary dark:border-transparent"
                    href=""
                  >
                    Add more details
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
