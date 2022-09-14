import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { validateFile } from '@helpers';
import { NotificationService } from '@services';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent {
  @Input() required = false;
  @Input() imageSrc: any;
  @Input() validation = 'image';
  @Output() fileUpload = new EventEmitter<File>();
  @Output() delete = new EventEmitter();

  currentFile: any;

  constructor(private notificationService: NotificationService) {}

  uploadFile($event: any) {
    if (validateFile($event.target.files[0])) {
      var reader = new FileReader();
      reader.onload = () => {
        this.currentFile = {
          file: $event.target.files[0],
          dataURI: reader.result,
          changed: true,
          deleted: false,
        };
        this.fileUpload.emit(this.currentFile.file);
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL($event.target.files[0]);
    } else {
      this.notificationService.showError('post.media.error_in_upload');
    }
  }

  clearImage() {
    this.imageSrc = '';
    this.delete.emit(true);
  }
}