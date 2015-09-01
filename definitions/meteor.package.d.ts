/**
 *  Meteor definitions for TypeScript
 *  author - Olivier Refalo - orefalo@yahoo.com
 *  author - David Allen - dave@fullflavedave.com
 *
 *  Thanks to Sam Hatoum for the base code for auto-generating this file.
 *
 *  supports Meteor 1.1.0.3
 */


/**
 * These are the modules and interfaces that can't be automatically generated from the Meteor data.js file
 */

declare module Meteor {
    interface Tinytest {
        add(name:string, func:Function): any;
        addAsync(name:string, func:Function): any;
    }
}
declare module Accounts {
	var ui: {
		};
}

declare module App {
	function accessRule(domainRule: string, options?: {
				launchExternal?: boolean;
			}): void;
	function configurePlugin(pluginName: string, config: Object): void;
	function icons(icons: Object): void;
	function info(options: {
				id?: string;
				 version?: string;
				 name?: string;
				 description?: string;
				 author?: string;
				 email?: string;
				 website?: string;
			}): void;
	function launchScreens(launchScreens: Object): void;
	function setPreference(name: string, value: string): void;
}

declare module Assets {
}

declare module Blaze {
	function Let(bindings: Function, contentFunc: Function): Blaze.View;
	var TemplateInstance: TemplateInstanceStatic;
	interface TemplateInstanceStatic {
		new(view: Blaze.View): TemplateInstance;
	}
	interface TemplateInstance {
		subscriptionsReady(): boolean;
	}

}

declare module Cordova {
	function depends(dependencies:{[id:string]:string}): void;
}

declare module DDP {
}

declare module DDPCommon {
	function MethodInvocation(options: {
			}): any;
}

declare module EJSON {
	var CustomType: CustomTypeStatic;
	interface CustomTypeStatic {
		new(): CustomType;
	}
	interface CustomType {
	}

}

declare module Match {
}

declare module Meteor {
}

declare module Mongo {
	var Cursor: CursorStatic;
	interface CursorStatic {
		new<T>(): Cursor<T>;
	}
	interface Cursor<T> {
	}

}

declare module Npm {
	function depends(dependencies:{[id:string]:string}): void;
}

declare module Package {
	function describe(options: {
				summary?: string;
				version?: string;
				name?: string;
				git?: string;
				documentation?: string;
				debugOnly?: boolean;
				prodOnly?: boolean;
			}): void;
	function onTest(func: Function): void;
	function onUse(func: Function): void;
	function registerBuildPlugin(options?: {
				name?: string;
				use?: string | string[];
				sources?: string[];
				npmDependencies?: Object;
			}): void;
}

declare module Plugin {
}

declare module Tracker {
	function Computation(): void;
	interface Computation {
	}

	var Dependency: DependencyStatic;
	interface DependencyStatic {
		new(): Dependency;
	}
	interface Dependency {
	}

}

declare module Session {
}

declare module HTTP {
}

declare module Email {
}

declare var CompileStep: CompileStepStatic;
interface CompileStepStatic {
	new(): CompileStep;
}
interface CompileStep {
	addAsset(options: {
			}, path: string, data: any /** Buffer **/ | string): any;
	addHtml(options: {
				section?: string;
				data?: string;
			}): any;
	addJavaScript(options: {
				path?: string;
				data?: string;
				sourcePath?: string;
			}): any;
	addStylesheet(options: {
			}, path: string, data: string, sourceMap: string): any;
	arch: any;
	declaredExports: any;
	error(options: {
			}, message: string, sourcePath?: string, line?: number, func?: string): any;
	fileOptions: any;
	fullInputPath: any;
	inputPath: any;
	inputSize: any;
	packageName: any;
	pathForSourceMap: any;
	read(n?: number): any;
	rootOutputPath: any;
}

declare var PackageAPI: PackageAPIStatic;
interface PackageAPIStatic {
	new(): PackageAPI;
}
interface PackageAPI {
	addFiles(filename: string | string[], architecture?: string | string[], fileOptions?: Object): void;
	export(exportedObjects: string | string[], architecture?: string | string[], exportOptions?: Object, testOnly?: boolean): void;
	imply(packageNames: string | string[], architecture?: string | string[]): void;
	use(packageNames: string | string[], architecture?: string | string[], options?: {
				weak?: boolean;
				unordered?: boolean;
			}): void;
	versionsFrom(meteorRelease: string | string[]): void;
}

declare var ReactiveVar: ReactiveVarStatic;
interface ReactiveVarStatic {
	new<T>(initialValue: T, equalsFunc?: Function): ReactiveVar<T>;
}
interface ReactiveVar<T> {
}

declare var Subscription: SubscriptionStatic;
interface SubscriptionStatic {
	new(): Subscription;
}
interface Subscription {
}

declare var Template: TemplateStatic;
interface TemplateStatic {
	new(): Template;
	// It should be [templateName: string]: TemplateInstance but this is not possible -- user will need to cast to TemplateInstance
	[templateName: string]: any | Template; // added "any" to make it work
	head: Template;
	find(selector:string):Blaze.Template;
	findAll(selector:string):Blaze.Template[];
	$:any; 
}
interface Template {
}

declare function getExtension(): String;
