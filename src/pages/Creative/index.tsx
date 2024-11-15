import Lucide from "@/components/Base/Lucide";
import { FormInput, FormCheck } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import products from "@/fakers/products";
import posts from "@/fakers/posts";
import events from "@/fakers/events";
import activities from "@/fakers/activities";
import categories from "@/fakers/categories";
import Button from "@/components/Base/Button";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { formatCurrency } from "@/utils/helper";
import mountainImage from "@/assets/images/miscellaneous/mountain.jpg";
import robotImage from "@/assets/images/miscellaneous/robot.jpg";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Creative
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 mt-3.5">
          <div className="flex flex-col col-span-12 gap-x-6 gap-y-10 md:col-span-6 xl:col-span-4">
            <div className="p-5 box box--stacked">
              <div className="flex items-center pb-5 mb-5 border-b border-dashed">
                <div className="mr-auto">
                  <div className="text-base font-medium">09:30 - 11:30</div>
                  <div className="text-slate-500 mt-0.5">Monday, Sep 01</div>
                </div>
                <div>
                  <div className="w-14 h-14 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-7">
                <div className="mr-auto">
                  <div className="max-w-[15rem] text-base font-medium truncate">
                    {products.fakeProducts()[0].name}
                  </div>
                  <div className="text-slate-500 mt-0.5 truncate max-w-[9rem] md:max-w-none">
                    {products.fakeProducts()[0].category.tags.join(", ")}
                  </div>
                </div>
                <div className="text-base font-medium text-primary">
                  ${formatCurrency(products.fakeProducts()[0].price)}
                </div>
              </div>
              <Button
                rounded
                type="button"
                variant="primary"
                className="w-full"
              >
                Order Now
              </Button>
            </div>
            <div className="p-1 box box--stacked">
              <div className="flex items-center gap-3.5 bg-gradient-to-r from-theme-2/[0.85] to-theme-1/[0.85] p-4 rounded-lg">
                <div>
                  <div className="w-14 h-14 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-base font-medium text-white">
                    {users.fakeUsers()[0].name}
                  </div>
                  <div className="text-slate-500 mt-0.5 text-white/80">
                    {activities.fakeActivities()[0].activity}
                  </div>
                  <div className="mt-1 text-white/80">
                    {activities.fakeActivities()[0].date}
                  </div>
                </div>
                <div className="flex gap-2 ml-auto">
                  <Tippy
                    as="a"
                    className="flex items-center justify-center border rounded-full w-9 h-9 border-white/40 bg-white/5"
                    content="Send a message"
                  >
                    <Lucide
                      icon="ChevronRight"
                      className="w-4 h-4 text-white fill-white/10"
                    />
                  </Tippy>
                </div>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex items-center gap-3.5 border-b border-dashed pb-5 mb-5">
                <div>
                  <div className="w-14 h-14 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-base font-medium truncate max-w-[9rem] md:max-w-none">
                    {users.fakeUsers()[0].name}
                  </div>
                  <div className="text-slate-500 mt-0.5 truncate max-w-[9rem] md:max-w-none">
                    {users.fakeUsers()[0].position}
                  </div>
                </div>
                <div className="flex gap-2 ml-auto">
                  <Tippy
                    as="a"
                    className="flex items-center justify-center border rounded-full w-9 h-9 border-primary/40 bg-primary/5"
                    content="Call"
                  >
                    <Lucide
                      icon="Phone"
                      className="w-4 h-4 text-primary fill-primary/10"
                    />
                  </Tippy>
                  <Tippy
                    as="a"
                    className="flex items-center justify-center border rounded-full w-9 h-9 border-primary/40 bg-primary/5"
                    content="Send a message"
                  >
                    <Lucide
                      icon="Mail"
                      className="w-4 h-4 text-primary fill-primary/10"
                    />
                  </Tippy>
                </div>
              </div>
              <div className="text-center">
                <div className="text-base font-medium">
                  Want to access Figma file "Tailwise"
                </div>
                <div className="text-slate-500 mt-0.5">
                  Give me an access, need to check the design immediately, thank
                  you.
                </div>
              </div>
              <div className="flex items-center gap-3 mt-7">
                <Button
                  rounded
                  type="button"
                  variant="outline-primary"
                  className="w-full"
                >
                  Denied
                </Button>
                <Button
                  rounded
                  type="button"
                  variant="primary"
                  className="w-full"
                >
                  Give Access
                </Button>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex flex-col items-center pt-5">
                <div className="flex items-center justify-center w-16 h-16 border-4 rounded-full bg-primary border-white/70">
                  <Lucide
                    icon="Check"
                    className="w-8 h-8 text-white stroke-[1.5]"
                  />
                </div>
                <div className="mt-5 text-base font-medium text-center">
                  Message Sent Successfully
                </div>
                <div className="text-slate-500 mt-0.5 text-center px-8">
                  Your message has been sent successfully. Thank you for
                  reaching out!
                </div>
                <Button
                  rounded
                  type="button"
                  variant="primary"
                  className="w-full mt-7"
                >
                  Dismiss
                </Button>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="text-base font-medium">Color</div>
              <div className="text-slate-500 mt-0.5">
                Select your preferred color
              </div>
              <div className="flex gap-2">
                <div className="relative mt-3 w-7 h-7">
                  <FormCheck.Input
                    type="checkbox"
                    value="checked"
                    onChange={() => {}}
                    checked
                    className="absolute z-10 w-full h-full opacity-0 peer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-white transition-all border border-blue-800 rounded-full opacity-0 w-7 h-7 bg-blue-800/80 peer-checked:opacity-100">
                    <Lucide icon="Check" className="stroke-[1.5] w-3 h-3" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-blue-800 transition-all border rounded-full w-7 h-7 peer-hover:rotate-180 border-blue-800/50 bg-blue-800/40 peer-checked:opacity-0 peer-hover:bg-blue-800/10"></div>
                </div>
                <div className="relative mt-3 w-7 h-7">
                  <FormCheck.Input
                    type="checkbox"
                    value="checked"
                    onChange={() => {}}
                    className="absolute z-10 w-full h-full opacity-0 peer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-white transition-all border border-red-800 rounded-full opacity-0 w-7 h-7 bg-red-800/80 peer-checked:opacity-100">
                    <Lucide icon="Check" className="stroke-[1.5] w-3 h-3" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-red-800 transition-all border rounded-full w-7 h-7 peer-hover:rotate-180 border-red-800/50 bg-red-800/40 peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                </div>
                <div className="relative mt-3 w-7 h-7">
                  <FormCheck.Input
                    type="checkbox"
                    value="checked"
                    onChange={() => {}}
                    className="absolute z-10 w-full h-full opacity-0 peer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-white transition-all border border-green-800 rounded-full opacity-0 w-7 h-7 bg-green-800/80 peer-checked:opacity-100">
                    <Lucide icon="Check" className="stroke-[1.5] w-3 h-3" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-green-800 transition-all border rounded-full w-7 h-7 peer-hover:rotate-180 border-green-800/50 bg-green-800/40 peer-checked:opacity-0 peer-hover:bg-green-800/10"></div>
                </div>
                <div className="relative mt-3 w-7 h-7">
                  <FormCheck.Input
                    type="checkbox"
                    value="checked"
                    onChange={() => {}}
                    className="absolute z-10 w-full h-full opacity-0 peer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-white transition-all border border-yellow-800 rounded-full opacity-0 w-7 h-7 bg-yellow-800/80 peer-checked:opacity-100">
                    <Lucide icon="Check" className="stroke-[1.5] w-3 h-3" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-yellow-800 transition-all border rounded-full w-7 h-7 peer-hover:rotate-180 border-yellow-800/50 bg-yellow-800/40 peer-checked:opacity-0 peer-hover:bg-yellow-800/10"></div>
                </div>
                <div className="relative mt-3 w-7 h-7">
                  <FormCheck.Input
                    type="checkbox"
                    value="checked"
                    onChange={() => {}}
                    className="absolute z-10 w-full h-full opacity-0 peer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-white transition-all border border-orange-800 rounded-full opacity-0 w-7 h-7 bg-orange-800/80 peer-checked:opacity-100">
                    <Lucide icon="Check" className="stroke-[1.5] w-3 h-3" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-orange-800 transition-all border rounded-full w-7 h-7 peer-hover:rotate-180 border-orange-800/50 bg-orange-800/40 peer-checked:opacity-0 peer-hover:bg-orange-800/10"></div>
                </div>
                <div className="relative mt-3 w-7 h-7">
                  <FormCheck.Input
                    type="checkbox"
                    value="checked"
                    onChange={() => {}}
                    className="absolute z-10 w-full h-full opacity-0 peer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-white transition-all border rounded-full opacity-0 w-7 h-7 bg-amber-800/80 border-amber-800 peer-checked:opacity-100">
                    <Lucide icon="Check" className="stroke-[1.5] w-3 h-3" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center m-auto transition-all border rounded-full w-7 h-7 peer-hover:rotate-180 text-amber-800 border-amber-800/50 bg-amber-800/40 peer-checked:opacity-0 peer-hover:bg-amber-800/10"></div>
                </div>
                <div className="relative mt-3 w-7 h-7">
                  <FormCheck.Input
                    type="checkbox"
                    value="checked"
                    onChange={() => {}}
                    className="absolute z-10 w-full h-full opacity-0 peer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-white transition-all border rounded-full opacity-0 w-7 h-7 bg-cyan-800/80 border-cyan-800 peer-checked:opacity-100">
                    <Lucide icon="Check" className="stroke-[1.5] w-3 h-3" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center m-auto transition-all border rounded-full w-7 h-7 peer-hover:rotate-180 text-cyan-800 border-cyan-800/50 bg-cyan-800/40 peer-checked:opacity-0 peer-hover:bg-cyan-800/10"></div>
                </div>
                <div className="relative mt-3 w-7 h-7">
                  <FormCheck.Input
                    type="checkbox"
                    value="checked"
                    onChange={() => {}}
                    className="absolute z-10 w-full h-full opacity-0 peer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-white transition-all border border-teal-800 rounded-full opacity-0 w-7 h-7 bg-teal-800/80 peer-checked:opacity-100">
                    <Lucide icon="Check" className="stroke-[1.5] w-3 h-3" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center m-auto text-teal-800 transition-all border rounded-full w-7 h-7 peer-hover:rotate-180 border-teal-800/50 bg-teal-800/40 peer-checked:opacity-0 peer-hover:bg-teal-800/10"></div>
                </div>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="relative">
                <FormInput
                  type="text"
                  className="pr-11"
                  rounded
                  placeholder="Search members..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center justify-center w-11">
                  <Lucide
                    icon="Search"
                    className="stroke-[1.3] w-4 h-4 text-slate-400"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-3.5 gap-2">
                {_.take(users.fakeUsers(), 5).map((faker, fakerKey) => (
                  <div
                    className="hover:bg-slate-50 transition-all rounded-lg cursor-pointer px-2 -mx-2 py-1.5 flex items-center gap-3.5 dark:hover:bg-darkmode-400"
                    key={fakerKey}
                  >
                    <div>
                      <div className="w-10 h-10 overflow-hidden border-2 rounded-full image-fit border-slate-200/70">
                        <img
                          alt="Tailwise - Admin Dashboard Template"
                          src={faker.photo}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{faker.name}</div>
                      <div className="mt-1 text-xs text-slate-500">
                        {faker.position}
                      </div>
                    </div>
                    <div className="flex gap-2.5 ml-auto">
                      <Tippy
                        as="a"
                        className="flex items-center justify-center border rounded-full w-7 h-7 border-primary/40 bg-primary/5"
                        content="Call"
                      >
                        <Lucide
                          icon="Phone"
                          className="w-3 h-3 text-primary fill-primary/10"
                        />
                      </Tippy>
                      <Tippy
                        as="a"
                        className="flex items-center justify-center border rounded-full w-7 h-7 border-primary/40 bg-primary/5"
                        content="Send a message"
                      >
                        <Lucide
                          icon="Mail"
                          className="w-3 h-3 text-primary fill-primary/10"
                        />
                      </Tippy>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 gap-x-6 gap-y-10 md:col-span-6 xl:col-span-4">
            <div className="p-5 box box--stacked">
              <div className="flex items-center gap-3.5">
                <div>
                  <div className="w-20 h-20 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-base font-medium truncate max-w-[12rem] md:max-w-none">
                    {events.fakeEvents()[0].title}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 mt-1 truncate max-w-[12rem] md:max-w-none">
                    <Lucide icon="MapPin" className="stroke-[1.3] w-4 h-4" />{" "}
                    {events.fakeEvents()[0].location}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 mt-1 truncate max-w-[12rem] md:max-w-none">
                    <Lucide icon="Building" className="stroke-[1.3] w-4 h-4" />{" "}
                    {events.fakeEvents()[0].organizer}
                  </div>
                </div>
              </div>
              <Button
                rounded
                type="button"
                variant="primary"
                className="w-full mt-5"
              >
                View Details
              </Button>
              <Button
                rounded
                type="button"
                variant="outline-primary"
                className="w-full mt-2"
              >
                Dismiss
              </Button>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex items-center gap-3.5">
                <div>
                  <div className="w-20 h-20 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={products.fakeProducts()[0].images[0].path}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="truncate max-w-[12rem] md:max-w-none text-base font-medium">
                    Celestial Shopping Extravaganza
                  </div>
                  <div className="text-slate-500 mt-0.5 truncate max-w-[11rem] md:max-w-none">
                    {products.fakeProducts()[0].name}
                  </div>
                  <div className="flex items-center mt-1.5">
                    <div className="text-base font-medium text-primary">
                      ${formatCurrency(products.fakeProducts()[0].price)}
                    </div>
                    <a href="" className="ml-auto">
                      <Lucide
                        icon="Heart"
                        className="w-5 h-5 text-pending fill-pending/30 stroke-[1]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex flex-col items-center">
                <div>
                  <div className="w-28 h-28 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                </div>
                <div className="mt-3 text-base font-medium">
                  {users.fakeUsers()[0].name}
                </div>
                <div className="text-slate-500 mt-0.5">
                  {users.fakeUsers()[0].position}
                </div>
                <div className="flex items-center gap-2 mt-5">
                  <div className="flex items-center gap-1.5">
                    <Lucide
                      icon="MapPin"
                      className="text-primary fill-primary/10 stroke-[1.3] w-4 h-4"
                    />
                    <div className="truncate max-w-[6rem] md:max-w-none">
                      {users.fakeUsers()[0].location}
                    </div>
                  </div>
                  <div className="w-1.5 h-1.5 mx-1.5 rounded-full bg-slate-300"></div>
                  <div className="flex items-center gap-1.5">
                    <Lucide
                      icon="Phone"
                      className="text-primary fill-primary/10 stroke-[1.3] w-4 h-4"
                    />
                    <div className="truncate max-w-[6rem] md:max-w-none">
                      {users.fakeUsers()[0].phone}
                    </div>
                  </div>
                </div>
                <Button
                  rounded
                  type="button"
                  variant="primary"
                  className="w-full mt-5"
                >
                  <Lucide icon="Mail" className="w-4 h-4 stroke-[1.3] mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="h-48 overflow-hidden rounded-lg image-fit before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-theme-1/60 before:to-theme-2/5">
                <img
                  alt="Tailwise - Admin Dashboard Template"
                  className="rounded-md saturate-150"
                  src={robotImage}
                />
              </div>
              <div className="mt-5 text-slate-500">
                {posts.fakePosts()[0].date}
              </div>
              <div className="mt-2 text-base font-medium">
                {posts.fakePosts()[0].title}
              </div>
              <div className="mt-2 leading-relaxed">
                {_.take(posts.fakePosts()[0].content.split(" "), 30).join(" ")}
                ...
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex flex-col items-center py-3">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-b from-theme-1/70 to-theme-2/70">
                  <div className="flex items-center justify-center w-3/4 bg-white rounded-full h-3/4 dark:bg-darkmode-600">
                    <Lucide
                      icon="ArrowUp"
                      className="w-10 h-10 text-theme-1 stroke-[1.3]"
                    />
                  </div>
                </div>
                <div className="mt-5 text-base font-medium">Upload Photos</div>
                <div className="text-slate-500 mt-0.5">
                  Drag and drop photo here or{" "}
                  <a href="" className="text-primary">
                    select files
                  </a>
                  .
                </div>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex items-center gap-3.5 border-b border-dashed pb-5 mb-5">
                <div>
                  <div className="w-10 h-10 overflow-hidden border-2 rounded-full image-fit border-slate-200/70">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-medium truncate max-w-[9rem] md:max-w-none">
                    {events.fakeEvents()[0].title}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {events.fakeEvents()[0].location}
                  </div>
                </div>
                <div className="flex gap-2 ml-auto">
                  <Tippy
                    as="a"
                    className="flex items-center justify-center border rounded-full w-7 h-7 border-primary/40 bg-primary/5"
                    content="Call"
                  >
                    <Lucide
                      icon="Phone"
                      className="w-3 h-3 text-primary fill-primary/10"
                    />
                  </Tippy>
                  <Tippy
                    as="a"
                    className="flex items-center justify-center border rounded-full w-7 h-7 border-primary/40 bg-primary/5"
                    content="Send a message"
                  >
                    <Lucide
                      icon="Mail"
                      className="w-3 h-3 text-primary fill-primary/10"
                    />
                  </Tippy>
                </div>
              </div>
              <div className="flex flex-col items-center sm:flex-row gap-2.5">
                We will notify you about the updates.
                <Button variant="primary" size="sm" className="h-6 sm:ml-auto">
                  More Details
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 gap-x-6 gap-y-10 md:col-span-6 xl:col-span-4">
            <div className="p-5 box box--stacked">
              <div className="text-xs text-slate-500">UPCOMING</div>
              <div className="mt-1 text-base font-medium">
                {posts.fakePosts()[0].title}
              </div>
              <a
                href=""
                className="flex items-center px-5 py-4 mt-5 border rounded-lg bg-slate-100 border-slate-200/70 hover hover:bg-slate-200/50 dark:bg-darkmode-400"
              >
                <Lucide
                  icon="MapPin"
                  className="w-5 h-5 text-primary stroke-[1] fill-primary/5"
                />
                <div className="ml-3.5">
                  <div className="font-medium">
                    {events.fakeEvents()[0].location}
                  </div>
                  <div className="mt-1 text-slate-500">
                    {events.fakeEvents()[0].date}
                  </div>
                </div>
                <Lucide
                  icon="ChevronRight"
                  className="w-6 h-6 text-primary/80 stroke-[1] ml-auto"
                />
              </a>
              <div className="flex items-center justify-center mt-6">
                <div className="flex">
                  {_.take(products.fakeProducts(), 4).map((faker, fakerKey) => (
                    <div
                      className="w-10 h-10 -ml-3.5 first:ml-0 image-fit zoom-in"
                      key={fakerKey}
                    >
                      <Tippy
                        as="img"
                        alt="Tailwise - Admin Dashboard Template"
                        className="border-2 border-white rounded-full"
                        src={faker.images[0].path}
                        content={faker.name}
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-3">
                  {users.fakeUsers()[0].name.split(" ")[0]},{" "}
                  {users.fakeUsers()[0].name.split(" ")[0]}, and{" "}
                  <a href="" className="ml-1 text-primary">
                    2 others
                  </a>
                  .
                </div>
              </div>
              <Button
                rounded
                type="button"
                variant="primary"
                className="w-full mt-5"
              >
                Create Meeting Schedule
              </Button>
            </div>
            <div className="p-5 box box--stacked">
              <div className="relative">
                <div className="overflow-hidden rounded-lg h-96 image-fit before:block before:absolute before:w-full before:h-5/6 before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-transparent before:to-theme-2/70">
                  <img
                    alt="Tailwise - Admin Dashboard Template"
                    className="rounded-md saturate-150"
                    src={mountainImage}
                  />
                </div>
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 -mt-10">
                  <div className="text-base text-white/90">
                    Today, 24 May 2046
                  </div>
                  <div className="text-6xl text-white">
                    {_.random(20, 35)}°C
                  </div>
                  <div className="text-base text-white/90">Cloudy</div>
                  <LoadingIcon
                    color="white"
                    icon="oval"
                    className="w-10 h-10 mt-10"
                  />
                </div>
              </div>
            </div>
            <div className="box box--stacked">
              <div className="flex flex-col items-center px-5 pt-5 pb-7">
                <div>
                  <div className="w-28 h-28 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                </div>
                <div className="mt-3 text-base font-medium">
                  {users.fakeUsers()[0].name}
                </div>
                <div className="text-slate-500 mt-0.5">
                  {users.fakeUsers()[0].position}
                </div>
                <div className="flex items-center px-2 mt-6">
                  <div className="w-full text-center">
                    <div className="font-medium">15</div>
                    <div className="mt-0.5 text-slate-500">Projects</div>
                  </div>
                  <div className="w-px mx-5 border-l border-dashed sm:mx-7 border-slate-300/70 h-7"></div>
                  <div className="w-full text-center">
                    <div className="font-medium">Full Time</div>
                    <div className="mt-0.5 text-slate-500">Employment</div>
                  </div>
                  <div className="w-px mx-5 border-l border-dashed sm:mx-7 border-slate-300/70 h-7"></div>
                  <div className="w-full text-center">
                    <div className="font-medium">4.5/5</div>
                    <div className="mt-0.5 text-slate-500">Rating</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center p-5 border-t rounded-b-lg border-slate-200/80 bg-slate-50 dark:bg-darkmode-400">
                <div className="leading-relaxed text-center mx-14">
                  How is your project experience with{" "}
                  <a href="" className="text-primary">
                    {users.fakeUsers()[0].name.split(" ")[0]}
                  </a>
                  ?
                </div>
                <div className="flex items-center mt-3.5">
                  <Lucide
                    icon="Star"
                    className="w-6 h-6 mr-1 text-pending fill-pending/30"
                  />
                  <Lucide
                    icon="Star"
                    className="w-6 h-6 mr-1 text-pending fill-pending/30"
                  />
                  <Lucide
                    icon="Star"
                    className="w-6 h-6 mr-1 text-pending fill-pending/30"
                  />
                  <Lucide
                    icon="Star"
                    className="w-6 h-6 mr-1 text-pending fill-pending/30"
                  />
                  <Lucide
                    icon="Star"
                    className="w-6 h-6 mr-1 text-slate-400 fill-slate/30"
                  />
                </div>
                <Button
                  rounded
                  type="button"
                  variant="primary"
                  className="w-full mt-6"
                >
                  Give a Rate
                </Button>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="text-base font-medium">
                Category Recommendations
              </div>
              <div className="flex flex-wrap mt-4 gap-2.5">
                {categories.fakeCategories().map((faker, fakerKey) => (
                  <a
                    href=""
                    key={fakerKey}
                    className={clsx([
                      "px-2.5 py-0.5 border rounded-md bg-primary/5 border-primary/10 text-primary [&.active]:bg-primary/90 [&.active]:text-white",
                      { active: !_.random(0, 1) },
                    ])}
                  >
                    {faker.name}
                  </a>
                ))}
              </div>
              <Button
                rounded
                type="button"
                variant="outline-primary"
                className="w-full mt-6"
              >
                Choose Categories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
