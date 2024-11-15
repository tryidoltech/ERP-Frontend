import clsx from "clsx";
import _ from "lodash";
import { useEffect, useRef } from "react";
import Table from "@/components/Base/Table";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormSwitch } from "@/components/Base/Form";
import Dropzone, { DropzoneElement } from "@/components/Base/Dropzone";

function Main() {
  const dropzoneSingleRef = useRef<DropzoneElement>();
  const dropzoneMultipleRef = useRef<DropzoneElement>();
  const dropzoneValidationRef = useRef<DropzoneElement>();

  useEffect(() => {
    const elDropzoneSingleRef = dropzoneSingleRef.current;
    if (elDropzoneSingleRef) {
      elDropzoneSingleRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneSingleRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    }

    const elDropzoneMultipleRef = dropzoneMultipleRef.current;
    if (elDropzoneMultipleRef) {
      elDropzoneMultipleRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneMultipleRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    }

    const elDropzoneValidationRef = dropzoneValidationRef.current;
    if (elDropzoneValidationRef) {
      elDropzoneValidationRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneValidationRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    }
  }, []);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            Dropzone
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            Discover the power of our Dropzone component for easy and flexible
            file uploads in your web applications.
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Single File Upload
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
                        The "Dropzone" component provides an easy way to
                        implement file upload functionality in your web
                        application. This example demonstrates how to create a
                        "Dropzone" for single file uploads, with options for
                        setting file upload constraints and additional headers.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Dropzone
                              getRef={(el) => {
                                dropzoneSingleRef.current = el;
                              }}
                              options={{
                                url: "https://httpbin.org/post",
                                thumbnailWidth: 150,
                                maxFilesize: 0.5,
                                maxFiles: 1,
                                headers: {
                                  "My-Awesome-Header": "header value",
                                },
                              }}
                              className="dropzone"
                            >
                              <div className="text-lg font-medium">
                                Drop files here or click to upload.
                              </div>
                              <div className="text-gray-600">
                                This is just a demo dropzone. Selected files are
                                <span className="font-medium">not</span>{" "}
                                actually uploaded.
                              </div>
                            </Dropzone>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
            <Dropzone
              getRef={(el) => {
                dropzoneSingleRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                maxFiles: 1,
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                This is just a demo dropzone. Selected files are
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Dropzone" component simplifies the implementation
                        of single file uploads in your web application. You can
                        configure various options such as the upload URL,
                        maximum file size, and headers to meet your specific
                        needs. In this example, a "Dropzone" for single file
                        uploads is created, with an informative user interface.
                        However, it's important to note that the selected files
                        are not actually uploaded to a server in this demo.
                        Customize the "Dropzone" component as required to enable
                        real file uploads and enhance the file handling
                        capabilities of your web application.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Multiple File Upload
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
                        The "Dropzone" component provides an easy way to
                        implement file upload functionality in your web
                        application. This example demonstrates how to create a
                        "Dropzone" for multiple file uploads, with options for
                        setting file upload constraints and additional headers.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Dropzone
                              getRef={(el) => {
                                dropzoneMultipleRef.current = el;
                              }}
                              options={{
                                url: "https://httpbin.org/post",
                                thumbnailWidth: 150,
                                maxFilesize: 0.5,
                                headers: {
                                  "My-Awesome-Header": "header value",
                                },
                              }}
                              className="dropzone"
                            >
                              <div className="text-lg font-medium">
                                Drop files here or click to upload.
                              </div>
                              <div className="text-gray-600">
                                This is just a demo dropzone. Selected files are
                                <span className="font-medium">not</span>{" "}
                                actually uploaded.
                              </div>
                            </Dropzone>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
            <Dropzone
              getRef={(el) => {
                dropzoneMultipleRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                This is just a demo dropzone. Selected files are
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Dropzone" component simplifies the implementation
                        of multiple file uploads in your web application. You
                        can configure various options such as the upload URL,
                        maximum file size, and headers to meet your specific
                        needs. In this example, a "Dropzone" for multiple file
                        uploads is created, with an informative user interface.
                        However, it's important to note that the selected files
                        are not actually uploaded to a server in this demo.
                        Customize the "Dropzone" component as required to enable
                        real file uploads and enhance the file handling
                        capabilities of your web application.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        File Type Validation
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
                        The "Dropzone" component allows you to implement file
                        upload functionality in your web application with the
                        ability to validate file types before uploading. This
                        example demonstrates how to create a "Dropzone" with
                        file type validation using accepted file formats.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Dropzone
                              getRef={(el) => {
                                dropzoneValidationRef.current = el;
                              }}
                              options={{
                                url: "https://httpbin.org/post",
                                thumbnailWidth: 150,
                                maxFilesize: 0.5,
                                acceptedFiles: "image/jpeg|image/png|image/jpg",
                                headers: {
                                  "My-Awesome-Header": "header value",
                                },
                              }}
                              className="dropzone"
                            >
                              <div className="text-lg font-medium">
                                Drop files here or click to upload.
                              </div>
                              <div className="text-gray-600">
                                This is just a demo dropzone. Selected files are
                                <span className="font-medium">not</span>{" "}
                                actually uploaded.
                              </div>
                            </Dropzone>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
            <Dropzone
              getRef={(el) => {
                dropzoneValidationRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                acceptedFiles: "image/jpeg|image/png|image/jpg",
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                This is just a demo dropzone. Selected files are
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Dropzone" component with file type validation
                        enhances your web application's file upload
                        functionality by allowing you to specify accepted file
                        formats. In this example, a "Dropzone" is created with
                        validation rules for image file formats (JPEG, PNG, and
                        JPG). Users will be restricted to uploading only the
                        specified file types. Customize the "Dropzone" component
                        and file format validation as needed to ensure secure
                        and controlled file uploads in your application.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
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
                    <div className="-mt-px">Dropzone</div>
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
                          <Table.Td>`DropzoneOptions`</Table.Td>
                          <Table.Td>Dropzone configuration options.</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`getRef`</Table.Td>
                          <Table.Td>
                            `(el: DropzoneElement) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            A function that receives a reference to the Dropzone
                            element.
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
                    Single File Upload
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Multiple Fiel Upload
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    File Type Validation
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
