var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  prompting() {
   return this.prompt([{
     type    : 'input',
     name    : 'name',
     message : 'Your project name',
     default : this.appname // Default to current folder name
   },
   {
     type    : 'confirm',
     name    : 'isContainer',
     message : 'Your project name',
     default : this.appname // Default to current folder name
   }
 ]).then((answers) => {
     this.log('app name', answers.name);
     this.data = answers
     this.data.finalName = answers.isContainer ? `${answers.name}Container` : answers.name
   });
 }

 _copyFile(args, filename) {
		var componentName = args[0];
		var insidePath = componentName ? componentName+'/' : '';
    console.log(insidePath+this.data.name+'/'+filename.replace('_', this.data.name))
		this.fs.copyTpl(
			this.templatePath(filename),
			this.destinationPath(insidePath+this.data.name+'/'+filename.replace('_', this.data.name)),
			this.data
		);
	}
	copyIndexFile() {
		this._copyFile(arguments,  '_.js' );
	}
	copyIndexFile1() {
		this._copyFile(arguments, '_Style.js');
	}
	copyIndexFile2() {
		this._copyFile(arguments, 'index.js');
	}
	copyIndexFile3() {
    if(!this.data.isContainer) {
      return
    }
		this._copyFile(arguments, '_Container.js');
	}
};
