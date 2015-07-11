
var 
	fs=require('fs'),
	render=require('./../../services/render'),
	baseview=require('./../view/BaseView'),
	path = require('path');

// mvc abstract controller 
function BaseActControllerDispath(ctx,controller,action){
				

		var res=ctx['response'],
			req=ctx['request'],
			config=ctx['config'];

		//run controllers action
		//设置默认值 例如：/ 定向到IndexController等
		if(controller===ctx['config']['CONTROLLER_EXT']){
			controller=ctx['config']['DEFAULT_CONTROLLER']+ctx['config']['CONTROLLER_EXT'];
		}
		if(action===ctx['config']['ACTION_EXT']){
			action=ctx['config']['DEFAULT_ACTION']+ctx['config']['ACTION_EXT'];
		}

		var ctr=require(config['CONTROLLER_PATH']+controller);

		//view model
		var v_model=ctr[action](res,req);

		//get index from IndexController
		var controller_prefix=controller.split('Controller',2)[0].toLowerCase();

		//get index from indexAction
		var action_prefix=action.split('Action',2)[0].toLowerCase();

		var view_tpl_full_path=config['VIEW_PATH']+controller_prefix+'/'+action_prefix +'.'+config['VIEW_TPL_EXT_NAME'];

		//absolute path
		view_tpl_full_path = path.join(__dirname, view_tpl_full_path);

		fs.readFile(view_tpl_full_path,function(err,data){

			if(err){

				render.rend(res,view_tpl_full_path+' not Found!<br/>');			

			}else{
				//pass valiables
				render.rend(res,baseview.view(data,v_model));	
			}

		});

	}



exports.dispath=BaseActControllerDispath;