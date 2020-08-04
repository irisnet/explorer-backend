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
    // service
    define_service = 'DefineService',
    bind_service = 'BindService',
    call_service = 'CallService',
    respond_service = 'RespondService',
    update_service_binding = 'UpdateServiceBinding',
    disable_service_binding = 'DisableServiceBinding',
    enable_service_binding = 'EnableServiceBinding',
    refund_service_deposit = 'RefundServiceDeposit',
    pause_request_context = 'PauseRequestContext',
    start_request_context = 'StartRequestContext',
    kill_request_context = 'KillRequestContext',
    update_request_context = 'UpdateRequestContext',
    create_record = 'CreateRecord',
    // nft
    burn_nft = 'BurnNft',
    transfer_nft = 'TransferNft',
    edit_nft = 'EditNft',
    issue_denom = 'IssueDenom',
    mint_nft = 'MintNft',
    // Token
    issue_token = 'IssueToken',
    edit_token = 'EditToken',
    mint_token = 'MintToken',
    transfer_token_owner = 'TransferTokenOwner',
    //Bank
    send = 'Send',
    multisend = 'Multisend',
    //Crisis
    verify_invariant = 'VerifyInvariant',
    //Evidence
    submit_evidence = 'SubmitEvidence',
    //Staking
    begin_unbonding = 'BeginUnbonding',
    edit_validator = 'EditValidator',
    create_validator = 'CreateValidator',
    delegate = 'Delegate',
    begin_redelegate = 'BeginRedelegate',
    // Slashing
    unjail = 'Unjail',
    // Distribution
    set_withdraw_address = 'Set_withdraw_address',
    withdraw_delegator_reward = 'WithdrawDelegatorReward',
    withdraw_validator_commission = 'WithdrawValidatorCommission',
    fund_community_pool = 'FundCommunityPool',
    // Gov
    deposit = 'Deposit',
    vote = 'Vote',
    submit_proposal = 'SubmitProposal',
    // Coinswap
    add_liquidity = 'AddLiquidity',
    remove_liquidity = 'RemoveLiquidity',
    swap_order = 'SwapOrder',
    // Htlc
    create_htlc = 'CreateHtlc',
    claim_htlc = 'ClaimHtlc',
    refund_htlc = 'RefundHtlc',
    // Guardian
    add_profiler = 'AddProfiler',
    delete_profiler = 'DeleteProfiler',
    add_trustee = 'AddTrustee',
    delete_trustee = 'DeleteTrustee',
    // Oracle
    create_feed = 'CreateFeed',
    start_feed = 'StartFeed',
    pause_feed = 'PauseFeed',
    edit_feed = 'EditFeed',
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