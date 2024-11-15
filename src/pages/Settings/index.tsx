import Lucide from "@/components/Base/Lucide";
import TomSelect from "@/components/Base/TomSelect";
import { Link, useLocation } from "react-router-dom";
import {
  FormLabel,
  FormCheck,
  FormInput,
  FormSelect,
  FormSwitch,
  FormHelp,
} from "@/components/Base/Form";
import Alert from "@/components/Base/Alert";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import countries from "@/fakers/countries";
import languages from "@/fakers/languages";
import timezones from "@/fakers/timezones";
import recentDevices from "@/fakers/recent-devices";
import Button from "@/components/Base/Button";
import Litepicker from "@/components/Base/Litepicker";
import Table from "@/components/Base/Table";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const [selectedCountry, setSelectedCountry] = useState("1");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedTimezone, setSelectedTimezone] = useState("-05:00");
  const [dateOfBirth, setDateOfBirth] = useState<string>();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Settings
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent dark:group-[.mode--light]:!bg-darkmode-900/30 dark:!box"
            >
              <Lucide
                icon="ExternalLink"
                className="stroke-[1.3] w-4 h-4 mr-3"
              />{" "}
              Go to My Profile
            </Button>
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="relative col-span-12 xl:col-span-3">
            <div className="sticky top-[104px]">
              <div className="flex flex-col px-5 pt-5 pb-6 box box--stacked">
                <Link
                  to="/settings"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    { active: queryParams.get("page") === null },
                  ])}
                >
                  <Lucide
                    icon="AppWindow"
                    className="stroke-[1.3] w-4 h-4 mr-3"
                  />{" "}
                  Profile Info
                </Link>
                <Link
                  to="/settings?page=email-settings"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    { active: queryParams.get("page") === "email-settings" },
                  ])}
                >
                  <Lucide
                    icon="MailCheck"
                    className="stroke-[1.3] w-4 h-4 mr-3"
                  />{" "}
                  Email Settings
                </Link>
                <Link
                  to="/settings?page=security"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    { active: queryParams.get("page") === "security" },
                  ])}
                >
                  <Lucide
                    icon="KeyRound"
                    className="stroke-[1.3] w-4 h-4 mr-3"
                  />{" "}
                  Security
                </Link>
                <Link
                  to="/settings?page=preferences"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    { active: queryParams.get("page") === "preferences" },
                  ])}
                >
                  <Lucide
                    icon="PackageCheck"
                    className="stroke-[1.3] w-4 h-4 mr-3"
                  />{" "}
                  Preferences
                </Link>
                <Link
                  to="/settings?page=two-factor-authentication"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    {
                      active:
                        queryParams.get("page") === "two-factor-authentication",
                    },
                  ])}
                >
                  <Lucide
                    icon="ShieldCheck"
                    className="stroke-[1.3] w-4 h-4 mr-3"
                  />{" "}
                  Two-factor Authentication
                </Link>
                <Link
                  to="/settings?page=device-history"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    { active: queryParams.get("page") === "device-history" },
                  ])}
                >
                  <Lucide
                    icon="Smartphone"
                    className="stroke-[1.3] w-4 h-4 mr-3"
                  />{" "}
                  Device History
                </Link>
                <Link
                  to="/settings?page=notification-settings"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    {
                      active:
                        queryParams.get("page") === "notification-settings",
                    },
                  ])}
                >
                  <Lucide
                    icon="BellDot"
                    className="stroke-[1.3] w-4 h-4 mr-3"
                  />{" "}
                  Notification Settings
                </Link>
                <Link
                  to="/settings?page=connected-services"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    {
                      active: queryParams.get("page") === "connected-services",
                    },
                  ])}
                >
                  <Lucide
                    icon="Workflow"
                    className="stroke-[1.3] w-4 h-4 mr-3"
                  />{" "}
                  Connected Services
                </Link>
                <Link
                  to="/settings?page=social-media-links"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    {
                      active: queryParams.get("page") === "social-media-links",
                    },
                  ])}
                >
                  <Lucide
                    icon="Podcast"
                    className="stroke-[1.3] w-4 h-4 mr-3"
                  />{" "}
                  Social Media Links
                </Link>
                <Link
                  to="/settings?page=account-deactivation"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    {
                      active:
                        queryParams.get("page") === "account-deactivation",
                    },
                  ])}
                >
                  <Lucide icon="Trash2" className="stroke-[1.3] w-4 h-4 mr-3" />{" "}
                  Account Deactivation
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 xl:col-span-9 gap-y-7">
            <div className="p-1.5 box flex flex-col box--stacked">
              <div className="h-60 relative w-full rounded-[0.6rem] bg-gradient-to-b from-theme-1/95 to-theme-2/95">
                <div
                  className={clsx([
                    "w-full h-full relative overflow-hidden",
                    "before:content-[''] before:absolute before:inset-0 before:bg-texture-white before:-mt-[50rem]",
                    "after:content-[''] after:absolute after:inset-0 after:bg-texture-white after:-mt-[50rem]",
                  ])}
                ></div>
                <div className="absolute inset-x-0 top-0 w-32 h-32 mx-auto mt-36">
                  <div className="w-full h-full overflow-hidden border-[6px] box border-white rounded-full image-fit">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 mb-2.5 mr-2.5 border-2 border-white rounded-full bg-success box"></div>
                </div>
              </div>
              <div className="p-5 flex flex-col sm:flex-row gap-y-3 sm:items-end rounded-[0.6rem] bg-slate-50 pt-12 dark:bg-darkmode-500">
                <div>
                  <FormLabel
                    htmlFor="regular-form-1"
                    className="flex items-center text-slate-500"
                  >
                    Who can see your profile photo?
                    <Tippy as="div" content="Low" className="ml-1.5">
                      <Lucide
                        icon="Info"
                        className="w-3.5 h-3.5 text-slate-500 stroke-[1.3]"
                      />
                    </Tippy>
                  </FormLabel>
                  <div className="relative mt-2.5">
                    <Lucide
                      icon="Globe"
                      className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
                    />
                    <FormSelect className="sm:w-44 mr-3 rounded-[0.5rem] pl-9">
                      <option value="custom-date">Anyone</option>
                      <option value="daily">Only you</option>
                    </FormSelect>
                  </div>
                </div>
                <Button
                  variant="outline-primary"
                  className="sm:ml-auto border-primary/50"
                >
                  <Lucide
                    icon="Image"
                    className="stroke-[1.3] w-4 h-4 mr-2.5"
                  />{" "}
                  Upload Cover
                </Button>
              </div>
            </div>
            {queryParams.get("page") === null && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  Profile Info
                </div>
                <div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Full Name</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter your full legal name as it appears on your
                          official identification.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col items-center md:flex-row">
                        <FormInput
                          type="text"
                          className="first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10"
                          placeholder={users.fakeUsers()[0].name.split(" ")[0]}
                        />
                        <FormInput
                          type="text"
                          className="first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10"
                          placeholder={users.fakeUsers()[0].name.split(" ")[1]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Date of Birth</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          This information is required to verify your age and
                          provide age-appropriate services.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <Litepicker
                        value={dateOfBirth}
                        onChange={(e) => {
                          setDateOfBirth(e.target.value);
                        }}
                        options={{
                          autoApply: false,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Gender</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Select your gender from the options.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col items-center md:flex-row">
                        <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10 dark:bg-darkmode-600">
                          <FormCheck>
                            <FormCheck.Input
                              id="checkbox-switch-1"
                              type="radio"
                              value=""
                            />
                            <FormCheck.Label htmlFor="checkbox-switch-1">
                              Male
                            </FormCheck.Label>
                          </FormCheck>
                        </div>
                        <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10 dark:bg-darkmode-600">
                          <FormCheck>
                            <FormCheck.Input
                              id="checkbox-switch-2"
                              type="radio"
                              value=""
                            />
                            <FormCheck.Label htmlFor="checkbox-switch-2">
                              Female
                            </FormCheck.Label>
                          </FormCheck>
                        </div>
                        <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10 dark:bg-darkmode-600">
                          <FormCheck>
                            <FormCheck.Input
                              id="checkbox-switch-3"
                              type="radio"
                              value=""
                            />
                            <FormCheck.Label htmlFor="checkbox-switch-3">
                              Prefer Not to Say
                            </FormCheck.Label>
                          </FormCheck>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Email</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Please provide a valid email address that you have
                          access to.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].email}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Phone Number</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Please provide a valid phone number where we can reach
                          you if needed.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col items-center md:flex-row">
                        <FormInput
                          type="text"
                          className="first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10"
                          placeholder={users.fakeUsers()[0].phone}
                        />
                        <FormSelect className="md:w-36 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                          <option value="office">Office</option>
                          <option value="home">Home</option>
                        </FormSelect>
                      </div>
                      <a
                        className="flex items-center mt-3.5 -mb-1 font-medium text-primary"
                        href=""
                      >
                        <Lucide
                          className="w-4 h-4 stroke-[1.3] mr-1"
                          icon="Plus"
                        />
                        Add phone
                      </a>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Department</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Choose your department or division from the list of
                          available options.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSelect>
                        {_.take(users.fakeUsers(), 5).map((faker, fakerKey) => (
                          <option key={fakerKey} value={faker.department}>
                            {faker.department}
                          </option>
                        ))}
                      </FormSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Account Type</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Your account type determines the features and
                          privileges you will have on this platform.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col items-center md:flex-row">
                        <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10 dark:bg-darkmode-600">
                          <FormCheck>
                            <FormCheck.Input
                              id="checkbox-switch-4"
                              type="radio"
                              value=""
                            />
                            <FormCheck.Label htmlFor="checkbox-switch-4">
                              Individual
                            </FormCheck.Label>
                          </FormCheck>
                        </div>
                        <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10 dark:bg-darkmode-600">
                          <FormCheck>
                            <FormCheck.Input
                              id="checkbox-switch-5"
                              type="radio"
                              value=""
                            />
                            <FormCheck.Label htmlFor="checkbox-switch-5">
                              Company
                            </FormCheck.Label>
                          </FormCheck>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Country</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Please specify the country you are currently residing
                          in.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <TomSelect
                        value={selectedCountry}
                        onChange={(e) => {
                          setSelectedCountry(e.target.value);
                        }}
                        options={{
                          placeholder: "Select your country",
                        }}
                        className="w-full"
                      >
                        {countries.fakeCountries().map((faker, fakerKey) => (
                          <option key={fakerKey} value={fakerKey}>
                            {faker.name}
                          </option>
                        ))}
                      </TomSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Address Line 1</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter the primary line of your physical address,
                          typically including your house or building number and
                          street name.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].location}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Address Line 2</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          This field is optional and can be used to provide any
                          additional address details, such as apartment number,
                          suite, floor, or any other relevant information.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].location}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">City</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter the name of the city or locality where your
                          address is located.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].location}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">State / Province</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Please select your state or province from the provided
                          list.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].location}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Zip / Postal Code</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter the postal code or ZIP code associated with your
                          address.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={_.random(5000, 9000).toString()}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Exclusivity</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Check this box if you want to enable exclusive access
                          to certain features or content on our platform.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormCheck>
                        <FormCheck.Input
                          id="checkbox-switch-1"
                          type="checkbox"
                          value=""
                        />
                        <FormCheck.Label
                          className="ml-3.5 text-slate-500 leading-relaxed"
                          htmlFor="checkbox-switch-1"
                        >
                          Opting to maintain exclusivity for your portfolio of
                          items on this platform can significantly boost your
                          earnings.
                        </FormCheck.Label>
                      </FormCheck>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "email-settings" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  Email Settings
                </div>
                <div>
                  <div className="text-slate-500">
                    Your current email address is{" "}
                    <span className="font-medium">
                      {users.fakeUsers()[1].email}
                    </span>
                    .
                  </div>
                  <div className="flex-col block pt-5 mt-2 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">New Email Address</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Please provide a valid email address that you have
                          access to.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].email}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "security" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  Security
                </div>
                <div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Current Password</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter your current password to verify your identity.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput type="text" placeholder="P**********d" />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">New Password</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Create a new password for your account.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput type="text" placeholder="P**********d" />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">
                            Confirm New Password
                          </div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Please re-enter the new password you've just chosen.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput type="text" placeholder="P**********d" />
                      <div className="mt-4 text-slate-500">
                        <div className="font-medium">
                          Password requirements:
                        </div>
                        <ul className="flex flex-col gap-1 pl-3 mt-2.5 list-disc text-slate-500">
                          <li className="pl-0.5">
                            Passwords must be at least 8 characters long.
                          </li>
                          <li className="pl-0.5">
                            Include at least one numeric digit (0-9).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "preferences" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  Preferences
                </div>
                <div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Language</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Select your preferred language from the available
                          options.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <TomSelect
                        value={selectedLanguage}
                        onChange={(e) => {
                          setSelectedLanguage(e.target.value);
                        }}
                        options={{
                          placeholder: "Select your language",
                        }}
                        className="w-full"
                      >
                        {languages.fakeLanguages().map((faker, fakerKey) => (
                          <option key={fakerKey} value={faker.code}>
                            {faker.name}
                          </option>
                        ))}
                      </TomSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Time Zone</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Select your current time zone from the list of
                          available options.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <TomSelect
                        value={selectedTimezone}
                        onChange={(e) => {
                          setSelectedTimezone(e.target.value);
                        }}
                        options={{
                          placeholder: "Select your timezone",
                        }}
                        className="w-full"
                      >
                        {timezones.fakeTimezones().map((faker, fakerKey) => (
                          <option key={fakerKey} value={faker.offset}>
                            {faker.name}
                          </option>
                        ))}
                      </TomSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Item Support</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Check this box if you require additional support or
                          assistance with your item.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSwitch.Input
                        id="checkbox-switch-7"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Featured Items</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Check this box if you want your items to be featured
                          or highlighted on our{" "}
                          <a href="" className="text-primary">
                            platform
                          </a>
                          .
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSwitch.Input
                        id="checkbox-switch-7"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "two-factor-authentication" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="flex items-center pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  Two-Factor Authentication (2FA)
                  <div className="flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px ml-3">
                    <span className="-mt-px">Enabled</span>
                  </div>
                </div>
                <div>
                  <div className="text-slate-500">
                    Enhance your account security by enabling Two-Factor
                    Authentication in the settings.
                  </div>
                  <div className="flex-col block pt-5 mt-2 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Account Password</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter your current password to verify your identity.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput type="text" placeholder="P**********d" />
                      <FormHelp>
                        This is the password you use to log in to your account.
                      </FormHelp>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "device-history" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="flex items-center pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  Device History
                </div>
                <div>
                  <div className="text-slate-500">
                    Access and control your currently connected devices.
                  </div>
                  <div className="mt-5 border rounded-lg border-slate-200/80">
                    <div className="overflow-auto xl:overflow-visible">
                      <Table>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Td className="py-4 font-medium whitespace-nowrap first:rounded-tl-lg border-slate-200/80 last:rounded-tr-lg bg-slate-50 text-slate-500 dark:bg-darkmode-400">
                              Browser
                            </Table.Td>
                            <Table.Td className="py-4 font-medium whitespace-nowrap first:rounded-tl-lg border-slate-200/80 last:rounded-tr-lg bg-slate-50 text-slate-500 dark:bg-darkmode-400">
                              Device
                            </Table.Td>
                            <Table.Td className="py-4 font-medium whitespace-nowrap first:rounded-tl-lg border-slate-200/80 last:rounded-tr-lg bg-slate-50 text-slate-500 dark:bg-darkmode-400">
                              Location
                            </Table.Td>
                            <Table.Td className="py-4 font-medium whitespace-nowrap first:rounded-tl-lg border-slate-200/80 last:rounded-tr-lg bg-slate-50 text-slate-500 dark:bg-darkmode-400">
                              Recent Activity
                            </Table.Td>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          {recentDevices
                            .fakeRecentDevices()
                            .map((faker, fakerKey) => (
                              <Table.Tr
                                key={fakerKey}
                                className="[&_td]:last:border-b-0"
                              >
                                <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                                  <div className="flex items-center whitespace-nowrap">
                                    <div className="w-4 h-4 image-fit zoom-in">
                                      <img
                                        alt="Tailwise - Admin Dashboard Template"
                                        className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                        src={faker.browser.image}
                                      />
                                    </div>
                                    <div className="ml-3.5">
                                      {faker.browser.name} on{" "}
                                      {faker.operatingSystem}
                                    </div>
                                  </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                                  <div className="flex items-center whitespace-nowrap">
                                    <Lucide
                                      icon="Smartphone"
                                      className="stroke-[1.3] w-4 h-4 mr-2"
                                    />{" "}
                                    {faker.device}
                                    {!fakerKey && (
                                      <div className="flex items-center text-xs font-medium rounded-md text-primary bg-primary/10 border border-primary/10 px-1.5 py-px ml-3">
                                        <span className="-mt-px">Current</span>
                                      </div>
                                    )}
                                  </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                                  <div className="whitespace-nowrap">
                                    {faker.location}
                                  </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                                  <div className="whitespace-nowrap">
                                    {faker.activity}
                                  </div>
                                </Table.Td>
                              </Table.Tr>
                            ))}
                        </Table.Tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {queryParams.get("page") === "notification-settings" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="flex items-center pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  Notification Settings
                </div>
                <div>
                  <Alert
                    variant="outline-primary"
                    className="flex items-center px-4 mb-2 bg-primary/5 border-primary/20"
                  >
                    {({ dismiss }) => (
                      <>
                        <div>
                          <Lucide
                            icon="AlertCircle"
                            className="stroke-[1.3] w-4 h-4 mr-3 md:mr-2"
                          />
                        </div>
                        <div className="mr-5 leading-relaxed">
                          We'd like to request your browser's permission to
                          display notifications.
                          <a
                            href=""
                            className="ml-1 font-medium underline decoration-dotted decoration-warning/50 underline-offset-[3px]"
                          >
                            Request permission
                          </a>
                          <Alert.DismissButton
                            type="button"
                            className="inset-y-0 btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </div>
                      </>
                    )}
                  </Alert>
                  <div className="mt-5 border rounded-lg border-slate-200/80">
                    <div className="overflow-auto xl:overflow-visible">
                      <Table>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Td className="py-4 font-medium first:rounded-tl-lg border-slate-200/80 last:rounded-tr-lg bg-slate-50 text-slate-500 dark:bg-darkmode-400">
                              Type
                            </Table.Td>
                            <Table.Td className="py-4 font-medium first:rounded-tl-lg border-slate-200/80 last:rounded-tr-lg bg-slate-50 text-slate-500 dark:bg-darkmode-400">
                              <div className="flex flex-col items-center">
                                <Lucide icon="MailCheck" className="w-6 h-6" />
                                <div className="mt-1.5">Email</div>
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 font-medium first:rounded-tl-lg border-slate-200/80 last:rounded-tr-lg bg-slate-50 text-slate-500 dark:bg-darkmode-400">
                              <div className="flex flex-col items-center">
                                <Lucide icon="Globe" className="w-6 h-6" />
                                <div className="mt-1.5">Browser</div>
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 font-medium first:rounded-tl-lg border-slate-200/80 last:rounded-tr-lg bg-slate-50 text-slate-500 dark:bg-darkmode-400">
                              <div className="flex flex-col items-center">
                                <Lucide icon="Smartphone" className="w-6 h-6" />
                                <div className="mt-1.5">App</div>
                              </div>
                            </Table.Td>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr className="[&_td]:last:border-b-0">
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="whitespace-nowrap">
                                Unusual login activity detected
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr className="[&_td]:last:border-b-0">
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="flex items-center whitespace-nowrap">
                                Password change request
                                <Lucide
                                  className="w-4 h-4 ml-1.5 text-slate-400 stroke-[1.3]"
                                  icon="Info"
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr className="[&_td]:last:border-b-0">
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="whitespace-nowrap">
                                New message received
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr className="[&_td]:last:border-b-0">
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="whitespace-nowrap">
                                Account activity summary
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr className="[&_td]:last:border-b-0">
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="flex items-center whitespace-nowrap">
                                Security alert: Unrecognized device
                                <Lucide
                                  className="w-4 h-4 ml-1.5 text-slate-400 stroke-[1.3]"
                                  icon="Info"
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-3 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-1/2 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">
                            When would you prefer to receive notifications?
                          </div>
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSelect>
                        <option value="Immediately">Immediately</option>
                        <option value="In the morning">In the morning</option>
                        <option value="At noon">At noon</option>
                        <option value="In the afternoon">
                          In the afternoon
                        </option>
                        <option value="In the evening">In the evening</option>
                        <option value="At night">At night</option>
                        <option value="Once a day">Once a day</option>
                        <option value="Twice a day">Twice a day</option>
                        <option value="Custom schedule">Custom schedule</option>
                        <option value="Don't send notifications">
                          Don't send notifications
                        </option>
                      </FormSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-3 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-1/2 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">
                            Receive a daily overview ('Daily Digest') of your
                            task activity.
                          </div>
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col items-center md:flex-row">
                        <FormSelect className="first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                          <option value="Every day">Every day</option>
                          <option value="Once a day">Once a day</option>
                          <option value="Twice a day">Twice a day</option>
                          <option value="No daily overview (disable Daily Digest)">
                            No daily overview (disable Daily Digest)
                          </option>
                        </FormSelect>
                        <FormSelect className="first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                          <option value="at 8:00 AM">at 8:00 AM</option>
                          <option value="at 12:00 PM">at 12:00 PM</option>
                          <option value="at 4:00 PM">at 4:00 PM</option>
                          <option value="at 8:00 PM">at 8:00 PM</option>
                        </FormSelect>
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 text-slate-500">
                    To reduce interruptions, email notifications are bundled and
                    delivered when you're not actively using your device.
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "connected-services" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  Connected Services
                </div>
                <div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ml-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Linkedin"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ml-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">Linked In</div>
                        </div>
                        <div className="pr-10 mt-1 text-xs leading-relaxed text-slate-500">
                          Professional network and career profile
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <FormSwitch.Input
                          id="checkbox-switch-7"
                          type="checkbox"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ml-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Dribbble"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ml-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">Dribbble</div>
                        </div>
                        <div className="pr-10 mt-1 text-xs leading-relaxed text-slate-500">
                          Design portfolio and creative work
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <FormSwitch.Input
                          id="checkbox-switch-7"
                          type="checkbox"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ml-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Facebook"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ml-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">Facebook</div>
                        </div>
                        <div className="pr-10 mt-1 text-xs leading-relaxed text-slate-500">
                          Social connections and personal updates
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <FormSwitch.Input
                          id="checkbox-switch-7"
                          type="checkbox"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ml-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Instagram"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ml-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">Instagram</div>
                        </div>
                        <div className="pr-10 mt-1 text-xs leading-relaxed text-slate-500">
                          Visual stories and photos
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <FormSwitch.Input
                          id="checkbox-switch-7"
                          type="checkbox"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ml-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Twitter"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ml-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">Twitter</div>
                        </div>
                        <div className="pr-10 mt-1 text-xs leading-relaxed text-slate-500">
                          Microblogging and real-time updates
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <FormSwitch.Input
                          id="checkbox-switch-7"
                          type="checkbox"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {queryParams.get("page") === "social-media-links" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  Social Media Links
                </div>
                <div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ml-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Linkedin"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ml-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">Linked In</div>
                        </div>
                        <div className="pr-10 mt-1 text-xs leading-relaxed text-slate-500">
                          Not connected
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <Button
                          variant="primary"
                          className="px-4 bg-primary/5 border-primary/50 text-primary"
                        >
                          <Lucide
                            icon="UserPlus"
                            className="stroke-[1.3] w-4 h-4 -ml-0.5 mr-2"
                          />
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ml-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Twitter"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ml-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">Dribbble</div>
                        </div>
                        <div className="pr-10 mt-1 text-xs leading-relaxed text-slate-500">
                          Not connected
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <Button
                          variant="primary"
                          className="px-4 bg-primary/5 border-primary/50 text-primary"
                        >
                          <Lucide
                            icon="UserPlus"
                            className="stroke-[1.3] w-4 h-4 -ml-0.5 mr-2"
                          />
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ml-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Facebook"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ml-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">Facebook</div>
                        </div>
                        <div className="pr-10 mt-1 text-xs leading-relaxed text-slate-500">
                          <a
                            className="text-primary underline decoration-dotted decoration-primary/30 underline-offset-[3px] text-xs"
                            href=""
                          >
                            www.facebook.com/
                            {users
                              .fakeUsers()[0]
                              .name.toLowerCase()
                              .replace(" ", "")}
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <Button
                          variant="primary"
                          className="px-4 bg-primary/5 border-primary/50 text-primary"
                        >
                          <Lucide
                            icon="Check"
                            className="stroke-[1.3] w-4 h-4 -ml-0.5 mr-2"
                          />
                          Connected
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ml-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Instagram"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ml-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">Instagram</div>
                        </div>
                        <div className="pr-10 mt-1 text-xs leading-relaxed text-slate-500">
                          Not connected
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <Button
                          variant="primary"
                          className="px-4 bg-primary/5 border-primary/50 text-primary"
                        >
                          <Lucide
                            icon="UserPlus"
                            className="stroke-[1.3] w-4 h-4 -ml-0.5 mr-2"
                          />
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ml-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Twitter"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ml-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">Twitter</div>
                        </div>
                        <div className="pr-10 mt-1 text-xs leading-relaxed text-slate-500">
                          <a
                            className="text-primary underline decoration-dotted decoration-primary/30 underline-offset-[3px] text-xs"
                            href=""
                          >
                            www.twitter.com/
                            {users
                              .fakeUsers()[0]
                              .name.toLowerCase()
                              .replace(" ", "")}
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <Button
                          variant="primary"
                          className="px-4 bg-primary/5 border-primary/50 text-primary"
                        >
                          <Lucide
                            icon="Check"
                            className="stroke-[1.3] w-4 h-4 -ml-0.5 mr-2"
                          />
                          Connected
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {queryParams.get("page") === "account-deactivation" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="flex items-center pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  Account Deactivation
                </div>
                <div>
                  <div className="leading-relaxed">
                    When you initiate the account deletion process, you'll no
                    longer have access to Front account services, and your
                    personal data will be permanently removed. You have a 10-day
                    window to cancel the deletion if needed.
                  </div>
                  <FormCheck className="mt-5">
                    <FormCheck.Input
                      id="checkbox-switch-1"
                      type="checkbox"
                      value=""
                    />
                    <FormCheck.Label htmlFor="checkbox-switch-1">
                      Confirm that I want to delete my account.
                    </FormCheck.Label>
                  </FormCheck>
                </div>
                <div className="flex flex-col-reverse gap-3 pt-5 mt-6 border-t border-dashed md:flex-row md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-secondary"
                    className="w-full px-4 md:w-auto"
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="w-full px-4 border-danger/50 bg-danger/5 md:w-auto"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
