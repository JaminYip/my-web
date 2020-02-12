import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function EnergyWebServiceDetail() {
  return (
    <React.Fragment>
      <DialogTitle>
        <Typography color="textSecondary">
          <Box fontSize="subtitle2.fontSize">
            エネルギー会社ウェブサービス開発
          </Box>
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          <Typography>
            <Box fontSize="overline.fontSize">【業務内容】</Box>
          </Typography>
          <Typography gutterBottom>
            <Box color="text.primary" fontSize="caption.fontSize">
              エネルギー会社契約者向けアプリやウェブサービスのバックエンドの開発兼チームリーダーを担当。Python-FlaskによるAPI開発、OSSライブラリ導入(ReportLab)、ミドルウェア導入(Apache
              Kafka)、ログローテーション機能実装、パフォーマンスチューニング(Nginx、uWSGI、MongoDB)。
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">
              【言語(FW)/DB/インフラ/ツール,その他】
            </Box>
          </Typography>
          <Typography gutterBottom>
            <Box color="text.primary" fontSize="caption.fontSize">
              Python3.6(Flask1.0.2)
              <br />
              MySQL5.7、MongoDB3.4、Redis3.2
              <br />
              AWS(VPC/EC2/ELB/RDS/S3)
              <br />
              Linux(CentOS7)、Nginx、uWSGI、API Gateway(Konga)、Apache
              Kafka、ReportLab、MongoDB Compass、Medis、Postman、WinSCP、Tera
              Term、Sourcetree、Github、Backlog、Symphony
            </Box>
          </Typography>
          <Typography>
            <Box fontSize="overline.fontSize">【習得技術】</Box>
          </Typography>
          <Typography>
            <Box color="text.primary" fontSize="caption.fontSize">
              Python(Flask)によるバックエンド開発は初体験であったが、これまでバックエンド開発の経験を生かして短期間でキャッチアップし、OSSライブラリやミドルウェアの技術調査・導入することにより知識も実践レベルで習得できた。
              <br />
              また、チームリーダーを勤めることにより、顧客や他チームとの調整、作業メンバーの進捗管理を経験することによってマネジメント能力を高めることができた。
            </Box>
          </Typography>
        </DialogContentText>
      </DialogContent>
    </React.Fragment>
  );
}
