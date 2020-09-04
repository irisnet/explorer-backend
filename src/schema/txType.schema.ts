import * as mongoose from 'mongoose';
import { ITxTypeStruct } from '../types/schemaTypes/txType.interface';
import { getTimestamp } from '../util/util';
import { TxType } from '../constant';
export const TxTypeSchema = new mongoose.Schema({
    type_name:{type:String, required:true, unique: true},
    create_time:{
    	type:Number,
    	default:getTimestamp(),
    },
    update_time:{
    	type:Number,
    	default:getTimestamp(),
    }
},{versionKey: false});

// txs/types
TxTypeSchema.statics.queryTxTypeList = async function ():Promise<ITxTypeStruct[]>{
	return await this.find({},{type_name:1})
};

TxTypeSchema.statics.queryServiceTxTypeList = async function ():Promise<ITxTypeStruct[]>{
    let queryParameters: any = {
        $or:[
            {"type_name":TxType.define_service},
            {"type_name":TxType.bind_service},
            {"type_name":TxType.call_service},
            {"type_name":TxType.respond_service},
            {"type_name":TxType.update_service_binding},
            {"type_name":TxType.disable_service_binding},
            {"type_name":TxType.enable_service_binding},
            {"type_name":TxType.refund_service_deposit},
            {"type_name":TxType.pause_request_context},
            {"type_name":TxType.start_request_context},
            {"type_name":TxType.kill_request_context},
            {"type_name":TxType.update_request_context},
            // {"type_name":TxType.service_set_withdraw_address},
            {"type_name":TxType.create_record},
            // {"type_name":TxType.withdraw_earned_fees},
        ]
    };
    return await this.find(queryParameters,{type_name:1});
};



// post txs/types
TxTypeSchema.statics.insertTxTypes = async function (types:string[]):Promise<ITxTypeStruct[]>{
	if (types && types.length) {
		let data = types.map((t)=>{
			let item = {
				type_name:t,
			}
		    return new this(item);
		});
		return await this.insertMany(data);
	}else{
		return [];
	}
}

// put txs/types
TxTypeSchema.statics.updateTxType = async function (type:string, newType:string):Promise<ITxTypeStruct>{
	if (type && type.length && newType && newType.length) {
		return await this.findOneAndUpdate({
			type_name:type,
		},{
			type_name:newType,
			update_time:getTimestamp(),
		});
	}else{
		return null;
	}
}

// delete txs/types
TxTypeSchema.statics.deleteTxType = async function (type:string):Promise<ITxTypeStruct>{
	return await this.findOneAndRemove({type_name:type});
}
