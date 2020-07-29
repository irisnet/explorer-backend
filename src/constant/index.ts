import { cfg } from '../config/config';

export enum TaskEnum {
    denom = 'ex_sync_denom',
    nft = 'ex_sync_nft',
    txServiceName = "sync_tx_service_name",
    validators = 'sync_validators',
}


export const DefaultPaging = {
    pageNum: 1,
    pageSize: 10,
};

export enum ENV {
    development = 'development',
    production = 'production',
};

export enum TxType {
    create_record = 'CreateRecord',
    mint_token = 'MintToken',
    burn_nft = 'BurnNft',
    send = 'Send',
    respond_service = 'RespondService',
    transfer_nft = 'TransferNft',
    edit_nft = 'EditNft',
    define_service = 'DefineService',
    bind_service = 'BindService',
    call_service = 'CallService',
    issue_denom = 'IssueDenom',
    mint_nft = 'MintNft',
    transfer_token_owner = 'TransferTokenOwner',
    issue_token = 'IssueToken',
    edit_token = 'EditToken',
    update_service_binding = 'UpdateServiceBinding',
    disable_service_binding = 'DisableServiceBinding',
    enable_service_binding = 'EnableServiceBinding',
    refund_service_deposit = 'RefundServiceDeposit',
    pause_request_context = 'PauseRequestContext',
    start_request_context = 'StartRequestContext',
    kill_request_context = 'KillRequestContext',
    update_request_context = 'UpdateRequestContext',
}

export enum TxStatus {
    SUCCESS = 'success',
    FAILED = 'fail',
}

export enum LoggerLevel {
    ALL = 'ALL',
    TRACE = 'TRACE',
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    FATAL = 'FATAL',
    MARK = 'MARK',
    OFF = 'OFF',
}