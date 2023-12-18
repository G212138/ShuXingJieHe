export class ConstValue {
    public static readonly IS_EDITIONS = true; //是否为发布版本，用于数据上报 及 log输出控制
    public static readonly IS_TEACHER = true; //是否为教师端版本
    public static readonly CoursewareKey = 'DaDongQiePian_adfsdsedwxljik'; //每个课件唯一的key 工程名+14位随机字符串。（脚本创建工程时自动生成）
    public static readonly GameName = '2023_5寒_2讲_打洞切片'; //游戏名中文描述，用于数据上报  （脚本创建工程时输入）
    public static readonly Subject = 1; //学科（1理科 2语文 3英语）

    /** -------------------编辑器默认选项是否展示------------- */
    public static readonly Editor_CanShowStars = true;//是否展示星级评判开关  
    public static readonly Editor_CanShowGuide = false;//是否展示引导开关  
    public static readonly Editor_CanShowAutoPlayTitle = true;//是否展示自动播放标题音效开关 
    /** --------------------------游戏独有业务数据--------------------------------- */
}
