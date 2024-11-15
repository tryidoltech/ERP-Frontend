import clsx from "clsx";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import Table from "@/components/Base/Table";
import Lucide from "@/components/Base/Lucide";
import Notification from "@/components/Base/Notification";
import { NotificationElement } from "@/components/Base/Notification";
import { FormSwitch } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import users from "@/fakers/users";
import { useRef } from "react";

function Main() {
  // Basic non sticky notification
  const basicNonStickyNotification = useRef<NotificationElement>();
  const basicNonStickyNotificationToggle = () => {
    // Show notification
    basicNonStickyNotification.current?.showToast();
  };

  // Basic sticky notification
  const basicStickyNotification = useRef<NotificationElement>();
  const basicStickyNotificationToggle = () => {
    // Show notification
    basicStickyNotification.current?.showToast();
  };

  // Success notification
  const successNotification = useRef<NotificationElement>();
  const successNotificationToggle = () => {
    // Show notification
    successNotification.current?.showToast();
  };

  // Notification with actions
  const notificationWithActions = useRef<NotificationElement>();
  const notificationWithActionsToggle = () => {
    // Show notification
    notificationWithActions.current?.showToast();
  };

  // Notification with avatar
  const notificationWithAvatar = useRef<NotificationElement>();
  const notificationWithAvatarToggle = () => {
    // Show notification
    notificationWithAvatar.current?.showToast();
  };

  // Notification with split buttons
  const notificationWithSplitButtons = useRef<NotificationElement>();
  const notificationWithSplitButtonsToggle = () => {
    // Show notification
    notificationWithSplitButtons.current?.showToast();
  };

  // Notification with buttons below
  const notificationWithButtonsBelow = useRef<NotificationElement>();
  const notificationWithButtonsBelowToggle = () => {
    // Show notification
    notificationWithButtonsBelow.current?.showToast();
  };

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Notification
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            Explore notification component, elevate user experience with simple
            and celebratory notifications!
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
                        Basic Notification
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
                        Notifications provide a way to communicate important
                        messages or updates to your users. This section covers
                        two types of basic notifications: non-sticky and sticky
                        notifications.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Basic Non Sticky Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  basicNonStickyNotification.current = el;
                                }}
                                options={{
                                  duration: 3000,
                                }}
                                className="flex flex-col sm:flex-row"
                              >
                                <div className="font-medium">
                                  Yay! Updates Published!
                                </div>
                                <a
                                  className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                                  href=""
                                >
                                  Review Changes
                                </a>
                              </Notification>
                              {/* END: Basic Non Sticky Notification Content */}
                              {/* BEGIN: Basic Sticky Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  basicStickyNotification.current = el;
                                }}
                                className="flex flex-col sm:flex-row"
                              >
                                <div className="font-medium">
                                  Yay! Updates Published!
                                </div>
                                <a
                                  className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                                  href=""
                                >
                                  Review Changes
                                </a>
                              </Notification>
                              {/* END: Basic Sticky Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                className="mr-1"
                                onClick={basicNonStickyNotificationToggle}
                              >
                                Show Non Sticky Notification
                              </Button>
                              <Button
                                variant="primary"
                                className="mt-2 sm:mt-0"
                                onClick={basicStickyNotificationToggle}
                              >
                                Show Sticky Notification
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Basic Non Sticky Notification Content */}
                <Notification
                  getRef={(el) => {
                    basicNonStickyNotification.current = el;
                  }}
                  options={{
                    duration: 3000,
                  }}
                  className="flex flex-col sm:flex-row"
                >
                  <div className="font-medium">
                    Yay! Updates Published!
                  </div>
                  <a
                    className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                    href=""
                  >
                    Review Changes
                  </a>
                </Notification>
                {/* END: Basic Non Sticky Notification Content */}
                {/* BEGIN: Basic Sticky Notification Content */}
                <Notification
                  getRef={(el) => {
                    basicStickyNotification.current = el;
                  }}
                  className="flex flex-col sm:flex-row"
                >
                  <div className="font-medium">
                    Yay! Updates Published!
                  </div>
                  <a
                    className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                    href=""
                  >
                    Review Changes
                  </a>
                </Notification>
                {/* END: Basic Sticky Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  className="mr-1"
                  onClick={basicNonStickyNotificationToggle}
                >
                  Show Non Sticky Notification
                </Button>
                <Button
                  variant="primary"
                  className="mt-2 sm:mt-0"
                  onClick={basicStickyNotificationToggle}
                >
                  Show Sticky Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Basic non sticky notification
                const basicNonStickyNotification = useRef<NotificationElement>();
                const basicNonStickyNotificationToggle = () => {
                  // Show notification
                  basicNonStickyNotification.current?.showToast();
                };
              
                // Basic sticky notification
                const basicStickyNotification = useRef<NotificationElement>();
                const basicStickyNotificationToggle = () => {
                  // Show notification
                  basicStickyNotification.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Basic notifications are a simple yet effective way to
                        inform users about important updates or actions they
                        need to take. Whether you choose non-sticky or sticky
                        notifications depends on the urgency and user experience
                        you want to provide. Experiment with different styles
                        and messages to create notifications that enhance your
                        application's usability.
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
                        Success Notification
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
                        Success notifications are a way to provide positive
                        feedback to users when they perform actions
                        successfully. This section demonstrates how to create
                        and use success notifications.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  successNotification.current = el;
                                }}
                                className="flex"
                              >
                                <Lucide
                                  icon="CheckCircle"
                                  className="text-success"
                                />
                                <div className="ml-4 mr-4">
                                  <div className="font-medium">
                                    Message Saved!
                                  </div>
                                  <div className="mt-1 text-slate-500">
                                    The message will be sent in 5 minutes.
                                  </div>
                                </div>
                              </Notification>
                              {/* END: Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                onClick={successNotificationToggle}
                              >
                                Show Notification
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    successNotification.current = el;
                  }}
                  className="flex"
                >
                  <Lucide icon="CheckCircle" className="text-success" />
                  <div className="ml-4 mr-4">
                    <div className="font-medium">Message Saved!</div>
                    <div className="mt-1 text-slate-500">
                      The message will be sent in 5 minutes.
                    </div>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={successNotificationToggle}
                >
                  Show Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Success notification
                const successNotification = useRef<NotificationElement>();
                const successNotificationToggle = () => {
                  // Show notification
                  successNotification.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Success notifications play a vital role in enhancing the
                        user experience by providing immediate feedback on
                        successful actions. They help users understand that
                        their actions were completed successfully, increasing
                        their confidence in your application. Consider using
                        success notifications for actions like saving data,
                        completing tasks, or successful submissions. Customize
                        the message and style to align with your application's
                        branding and user expectations.
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
                        Notification with Actions
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
                        Notifications with actions allow you to provide users
                        with clear options to take after receiving a
                        notification. This section demonstrates how to create
                        and use notifications with actions.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  notificationWithActions.current = el;
                                }}
                                className="flex"
                              >
                                <Lucide icon="HardDrive" />
                                <div className="ml-4 mr-4">
                                  <div className="font-medium">
                                    Storage Removed!
                                  </div>
                                  <div className="mt-1 text-slate-500">
                                    The server will restart in 30 seconds, don't
                                    make
                                    <br />
                                    changes during the update process!
                                  </div>
                                  <div className="font-medium flex mt-1.5">
                                    <a
                                      className="text-primary dark:text-slate-400"
                                      href=""
                                    >
                                      Restart Now
                                    </a>
                                    <a className="ml-3 text-slate-500" href="">
                                      Cancel
                                    </a>
                                  </div>
                                </div>
                              </Notification>
                              {/* END: Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                onClick={notificationWithActionsToggle}
                              >
                                Show Notification
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithActions.current = el;
                  }}
                  className="flex"
                >
                  <Lucide icon="HardDrive" />
                  <div className="ml-4 mr-4">
                    <div className="font-medium">Storage Removed!</div>
                    <div className="mt-1 text-slate-500">
                      The server will restart in 30 seconds, don't make
                      <br />
                      changes during the update process!
                    </div>
                    <div className="font-medium flex mt-1.5">
                      <a
                        className="text-primary dark:text-slate-400"
                        href=""
                      >
                        Restart Now
                      </a>
                      <a className="ml-3 text-slate-500" href="">
                        Cancel
                      </a>
                    </div>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithActionsToggle}
                >
                  Show Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Notification with actions
                const notificationWithActions = useRef<NotificationElement>();
                const notificationWithActionsToggle = () => {
                  // Show notification
                  notificationWithActions.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Notifications with actions are a powerful way to engage
                        users and guide them on the next steps they can take.
                        These notifications are particularly useful for critical
                        alerts or situations where user interaction is required.
                        By providing clear and relevant action buttons, you can
                        help users make informed decisions and take appropriate
                        actions. Customize the message, icons, and actions to
                        match your application's requirements and user needs.
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
                        Notification with Avatar
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
                        Notifications with avatars allow you to personalize
                        notifications by including user avatars or profile
                        pictures. This section demonstrates how to create and
                        use notifications with avatars.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  notificationWithAvatar.current = el;
                                }}
                                options={{
                                  close: false,
                                }}
                                className="flex"
                              >
                                <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                                  <img
                                    alt="Tailwise - Admin Dashboard Template"
                                    src={users.fakeUsers()[0].photo}
                                  />
                                </div>
                                <div className="ml-4 sm:mr-28">
                                  <div className="font-medium">
                                    {users.fakeUsers()[0].name}
                                  </div>
                                  <div className="mt-1 text-slate-500">
                                    See you later! 😃😃😃
                                  </div>
                                </div>
                                <a
                                  data-dismiss="notification"
                                  className="absolute top-0 bottom-0 right-0 flex items-center px-6 font-medium border-l border-slate-200/60 dark:border-darkmode-400 text-primary dark:text-slate-400"
                                  href="#"
                                >
                                  Reply
                                </a>
                              </Notification>
                              {/* END: Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                onClick={notificationWithAvatarToggle}
                              >
                                Show Notification
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithAvatar.current = el;
                  }}
                  options={{
                    close: false,
                  }}
                  className="flex"
                >
                  <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                    <img
                      alt="Tailwise - Admin Dashboard Template"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                  <div className="ml-4 sm:mr-28">
                    <div className="font-medium">
                      {users.fakeUsers()[0].name}
                    </div>
                    <div className="mt-1 text-slate-500">
                      See you later! 😃😃😃
                    </div>
                  </div>
                  <a
                    data-dismiss="notification"
                    className="absolute top-0 bottom-0 right-0 flex items-center px-6 font-medium border-l border-slate-200/60 dark:border-darkmode-400 text-primary dark:text-slate-400"
                    href="#"
                  >
                    Reply
                  </a>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithAvatarToggle}
                >
                  Show Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Notification with avatar
                const notificationWithAvatar = useRef<NotificationElement>();
                const notificationWithAvatarToggle = () => {
                  // Show notification
                  notificationWithAvatar.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Notifications with avatars add a personal touch to your
                        notifications, making them more engaging and relatable
                        to users. You can use avatars to identify the sender or
                        source of the notification, creating a more
                        user-friendly and interactive experience. Customize the
                        avatar, user information, and message to match your
                        application's context and user interactions.
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
                        Notification with Split Buttons
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
                        Notifications with split buttons allow you to provide
                        multiple action options within a single notification.
                        This section demonstrates how to create and use
                        notifications with split buttons.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  notificationWithSplitButtons.current = el;
                                }}
                                options={{
                                  close: false,
                                }}
                                className="flex"
                              >
                                <div className="sm:mr-40">
                                  <div className="font-medium">
                                    Introducing new theme
                                  </div>
                                  <div className="mt-1 text-slate-500">
                                    Release version 2.3.3
                                  </div>
                                </div>
                                <div className="absolute top-0 bottom-0 right-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400">
                                  <a
                                    className="flex items-center justify-center flex-1 px-6 font-medium border-b text-primary dark:text-slate-400 border-slate-200/60 dark:border-darkmode-400"
                                    href="#"
                                  >
                                    View Details
                                  </a>
                                  <a
                                    data-dismiss="notification"
                                    className="flex items-center justify-center flex-1 px-6 font-medium text-slate-500"
                                    href="#"
                                  >
                                    Dismiss
                                  </a>
                                </div>
                              </Notification>
                              {/* END: Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                onClick={notificationWithSplitButtonsToggle}
                              >
                                Show Notification
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithSplitButtons.current = el;
                  }}
                  options={{
                    close: false,
                  }}
                  className="flex"
                >
                  <div className="sm:mr-40">
                    <div className="font-medium">
                      Introducing new theme
                    </div>
                    <div className="mt-1 text-slate-500">
                      Release version 2.3.3
                    </div>
                  </div>
                  <div className="absolute top-0 bottom-0 right-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400">
                    <a
                      className="flex items-center justify-center flex-1 px-6 font-medium border-b text-primary dark:text-slate-400 border-slate-200/60 dark:border-darkmode-400"
                      href="#"
                    >
                      View Details
                    </a>
                    <a
                      data-dismiss="notification"
                      className="flex items-center justify-center flex-1 px-6 font-medium text-slate-500"
                      href="#"
                    >
                      Dismiss
                    </a>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithSplitButtonsToggle}
                >
                  Show Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Notification with split buttons
                const notificationWithSplitButtons = useRef<NotificationElement>();
                const notificationWithSplitButtonsToggle = () => {
                  // Show notification
                  notificationWithSplitButtons.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Notifications with split buttons enhance user
                        interaction by offering multiple actions within a single
                        notification. This feature is useful for providing users
                        with choices or quick access to relevant actions without
                        cluttering the notification interface. Customize the
                        buttons and actions to suit your application's needs and
                        provide a seamless user experience.
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
                        Notification with Buttons Below
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
                        Notifications with buttons below allow you to include
                        action buttons directly beneath the notification
                        content. This section demonstrates how to create and use
                        notifications with buttons below.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  notificationWithButtonsBelow.current = el;
                                }}
                                options={{
                                  close: false,
                                }}
                                className="flex"
                              >
                                <Lucide icon="FileText" />
                                <div className="ml-4 mr-5 sm:mr-20">
                                  <div className="font-medium">
                                    {users.fakeUsers()[0].name}
                                  </div>
                                  <div className="mt-1 text-slate-500">
                                    Sent you new documents.
                                  </div>
                                  <div className="mt-2.5">
                                    <Button
                                      variant="primary"
                                      as="a"
                                      className="px-2 py-1 mr-2"
                                      href=""
                                    >
                                      Preview
                                    </Button>
                                    <Button
                                      variant="outline-secondary"
                                      as="a"
                                      className="px-2 py-1"
                                      href=""
                                    >
                                      Download
                                    </Button>
                                  </div>
                                </div>
                              </Notification>
                              {/* END: Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                onClick={notificationWithButtonsBelowToggle}
                              >
                                Show Notification
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithButtonsBelow.current = el;
                  }}
                  options={{
                    close: false,
                  }}
                  className="flex"
                >
                  <Lucide icon="FileText" />
                  <div className="ml-4 mr-5 sm:mr-20">
                    <div className="font-medium">
                      {users.fakeUsers()[0].name}
                    </div>
                    <div className="mt-1 text-slate-500">
                      Sent you new documents.
                    </div>
                    <div className="mt-2.5">
                      <Button
                        variant="primary"
                        as="a"
                        className="px-2 py-1 mr-2"
                        href=""
                      >
                        Preview
                      </Button>
                      <Button
                        variant="outline-secondary"
                        as="a"
                        className="px-2 py-1"
                        href=""
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithButtonsBelowToggle}
                >
                  Show Notification
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Notification with buttons below
                const notificationWithButtonsBelow = useRef<NotificationElement>();
                const notificationWithButtonsBelowToggle = () => {
                  // Show notification
                  notificationWithButtonsBelow.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Notifications with buttons below enhance user engagement
                        by placing actionable buttons directly beneath the
                        notification message. This design allows users to
                        quickly respond or take specific actions related to the
                        notification's content. Customize the buttons and
                        content to suit your application's needs and provide a
                        seamless user experience.
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
                    <div className="-mt-px">Dialog</div>
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
                          <Table.Td>`options`</Table.Td>
                          <Table.Td>`Options`</Table.Td>
                          <Table.Td>
                            An object containing options for configuring the
                            notification behavior. Explore all the available
                            APIs through the following helpful documentation
                            links
                            <a
                              href="https://apvarun.github.io/toastify-js/"
                              target="blank"
                              className="ml-1 text-primary"
                            >
                              https://apvarun.github.io/toastify-js/
                            </a>
                            .
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`getRef`</Table.Td>
                          <Table.Td>
                            `(el: NotificationElement) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            A callback function to receive a reference to the
                            NotificationElement.
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
                    Basic Notification
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Success Notification
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Notification with Actions
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Notification with Avatar
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Notification with Split Buttons
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Notification with Buttons Below
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
